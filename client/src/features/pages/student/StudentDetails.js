import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ApiService from "../../services/ApiService";
import ToasterService from "../../services/ToasterService";
import Exception from "../../services/Exception";
import {Button} from "baseui/button";
import Utils from "../../shared/Utils";
import style from "./student.module.css";
import {Card, StyledBody} from "baseui/card";
import {ListItem, ListItemLabel} from "baseui/list";
import LoginService from "../../services/LoginService";

function StudentDetails() {
    const {id} = useParams();
    const [etudiant, setEtudiant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.callGet('etudiants/' + id)
            .then((result) => {
                if (result?.error) {
                    ToasterService.error(result.error)
                    setLoading(false);
                    setError(true);
                } else {
                    setEtudiant(result);
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
        return (etudiant && data) ? data : noData();
    }

    return (
        <>
            <Button onClick={() => navigate('/stagiaires')}>
                Retour
            </Button>&nbsp;
            {
                LoginService.isTeacher() ? <Button onClick={() => navigate('/stagiaires/' + id + '/edit')}>
                    Editer les informations
                </Button> : <></>
            }
            {
                loading ? Utils.skeletonElementsEtudiant() :
                    error ? Utils.errorDiv('/stagiaires') :
                        <Card title="Informations" className={style.cards}>
                            <StyledBody>
                                <ul className={style.ulStyle}>
                                    <ListItem
                                        endEnhancer={() => <span>{display(etudiant.prenomEtudiant)}</span>}>
                                        <ListItemLabel>Prénom du stagiaire</ListItemLabel>
                                    </ListItem>
                                    <ListItem endEnhancer={() => <span>{display(etudiant.nomEtudiant)}</span>}>
                                        <ListItemLabel>Nom du stagiaire</ListItemLabel>
                                    </ListItem>
                                    <ListItem endEnhancer={() => <span>{display(etudiant.anneeObtention)}</span>}>
                                        <ListItemLabel>Année d'obtention du BTS</ListItemLabel>
                                    </ListItem>
                                    <ListItem endEnhancer={() => <span>{display(etudiant.numClasse?.nomClasse)}</span>}>
                                        <ListItemLabel>Classe</ListItemLabel>
                                    </ListItem>
                                </ul>
                            </StyledBody>
                        </Card>
            }
        </>
    );
}

export default StudentDetails;
