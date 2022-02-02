import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Card, StyledBody} from "baseui/card";
import {Cell, Grid} from "baseui/layout-grid";
import style from './entreprise.module.css'
import ApiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import ToasterService from "../../services/ToasterService";
import {ListItem, ListItemLabel} from "baseui/list";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, SIZE} from "baseui/button";
import Utils from "../../shared/Utils";
import LoginService from "../../services/LoginService";

function EntrepriseDetails() {
    const {id} = useParams();
    const [entreprise, setEntreprise] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.callGet('entreprises/' + id)
            .then((result) => {
                if (result?.error) {
                    ToasterService.error(result.error)
                    setLoading(false);
                    setError(true);
                } else {
                    setEntreprise(result);
                    setLoading(false);
                }
            })
            .catch((error) => {
                Exception.throw(error.toString())
                setLoading(false);
                setError(true);
            })
    }, [id]);


    const noData = () => {
        return <span style={{color: 'lightgray'}}>Aucune donnée</span>
    }

    const display = (data) => {
        return (entreprise && data) ? data : noData();
    }

    const getSpecialites = (data) => {
        if (entreprise && data) {
            let listSpecialites = '';
            data.map((s) => {
                listSpecialites += s.libelle + ', ';
            })
            return listSpecialites.slice(0,-2);
        } else {
            return noData();
        }
    }

    let buttonProf
    if(LoginService.isTeacher()){
        buttonProf = <Button size={SIZE.small}
                                   className={style.editBtn}
                                   onClick={() => navigate('/entreprises/' + id + '/edit')}>
            Éditer les informations
        </Button>
    }else{
        buttonProf = <></>
    }
    return (
        <>
            <Button onClick={() => navigate('/entreprises')}>
                Retour
            </Button>
            {
                loading ? Utils.loadingSkeletonElements() :
                    error ? Utils.errorDiv() :
                        <Grid className={style.cards}>
                            <Cell span={6}>
                                <Card title="Informations" className={style.cards}>
                                    <StyledBody>
                                        <ul className={style.ulStyle}>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.raisonSociale)}</span>}>
                                                <ListItemLabel>Nom de l'entreprise</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() => <span>{display(entreprise.nomContact)}</span>}>
                                                <ListItemLabel>Nom du contact</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() => <span>{display(entreprise.nomResp)}</span>}>
                                                <ListItemLabel>Nom du responsable</ListItemLabel>
                                            </ListItem>
                                        </ul>
                                    </StyledBody>
                                </Card>
                                <Card title="Contact" className={style.cards}>
                                    <StyledBody>
                                        <ul className={style.ulStyle}>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.rueEntreprise)}</span>}>
                                                <ListItemLabel>Rue</ListItemLabel>
                                            </ListItem>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.cpEntreprise)}</span>}>
                                                <ListItemLabel>Code postal</ListItemLabel>
                                            </ListItem>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.villeEntreprise)}</span>}>
                                                <ListItemLabel>Ville</ListItemLabel>
                                            </ListItem>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.telEntreprise)}</span>}>
                                                <ListItemLabel>Téléphone</ListItemLabel>
                                            </ListItem>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.faxEntreprise)}</span>}>
                                                <ListItemLabel>Fax</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() => <>
                                                {entreprise?.faxEntreprise ?
                                                    <>
                                                        <FontAwesomeIcon icon={faEnvelope}/>&nbsp;
                                                        <a href={`mailto:${entreprise.email}`}>{entreprise.email}</a>
                                                    </> : noData()
                                                }
                                            </>}>
                                                <ListItemLabel>Email</ListItemLabel>
                                            </ListItem>
                                        </ul>
                                    </StyledBody>
                                </Card>
                            </Cell>
                            <Cell span={6}>
                                <Card title="Divers" className={style.cards}>
                                    <StyledBody>
                                        <ul className={style.ulStyle}>
                                            <ListItem
                                                endEnhancer={() => <span>{display(entreprise.observation)}</span>}>
                                                <ListItemLabel>Observation</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() => <>
                                                {entreprise?.siteEntreprise ?
                                                    <>
                                                        <FontAwesomeIcon icon={faLink}/>&nbsp;
                                                        <a href={entreprise.siteEntreprise} target='_blank'
                                                           rel='noreferrer'>
                                                            {entreprise.siteEntreprise}
                                                        </a>
                                                    </> : noData()
                                                }
                                            </>}>
                                                <ListItemLabel>URL du site</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() => <span>{display(entreprise.niveau)}</span>}>
                                                <ListItemLabel>Niveau</ListItemLabel>
                                            </ListItem>
                                            <ListItem endEnhancer={() =>
                                                <span>{getSpecialites(entreprise.specialites)}</span>}>
                                                <ListItemLabel>Spécialités</ListItemLabel>
                                            </ListItem>
                                        </ul>
                                    </StyledBody>
                                </Card>
                                {buttonProf}
                            </Cell>
                        </Grid>
            }
        </>
    );
}

export default EntrepriseDetails;
