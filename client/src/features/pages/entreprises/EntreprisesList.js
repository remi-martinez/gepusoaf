import React, {useEffect, useState} from 'react';
import {useStyletron} from 'baseui';
import {CategoricalColumn, CustomColumn, StatefulDataTable, StringColumn,} from 'baseui/data-table';
import {ButtonGroup} from "baseui/button-group";
import {Button, SIZE} from "baseui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faHandshake, faLink, faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import {StyledLink} from "baseui/link";
import ApiService from "../../services/ApiService";
import apiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";
import style from './entreprise.module.css'
import {useNavigate} from "react-router-dom";
import loginService from "../../services/LoginService";
import ToasterService from "../../services/ToasterService";
import LoginService from "../../services/LoginService";

function EntreprisesList() {
    const [css] = useStyletron();
    const [loading, setLoading] = useState(false);
    const [entreprises, setEntreprises] = useState([]);
    const navigate = useNavigate()


    const columns = [
        CustomColumn({
            title: 'Opération',
            maxWidth: 100,
            mapDataToValue: (data) => data.numEntreprise,
            renderCell: function Cell(data) {
                let buttonProf;
                if(LoginService.isTeacher()){
                     buttonProf =
                        <Button onClick={() => navigate('/entreprises/' + data.value + '/edit')}>
                            <FontAwesomeIcon icon={faPen}/>
                        </Button>
                } else {
                    buttonProf = <></>
                }
                return (
                    <div>
                        <ButtonGroup size={SIZE.compact}>
                            <Button onClick={() => navigate('/entreprises/' + data.value)}>
                                <FontAwesomeIcon icon={faEye} color='#1E57B7'/>
                            </Button>
                            <Button onClick={() => navigate('/inscription')}>  {/*TODO : si y'a le temps, passer les données dans inscription (entreprise)*/}
                                <FontAwesomeIcon icon={faHandshake}/>
                            </Button>
                            {buttonProf}
                        </ButtonGroup>

                    </div>
                );
            },
        }),
        StringColumn({
            title: 'Entreprise',
            mapDataToValue: (data) => data.entreprise,
        }),
        StringColumn({
            title: 'Responsable',
            mapDataToValue: (data) => data.responsable,
        }),
        StringColumn({
            title: 'Adresse',
            mapDataToValue: (data) => data.adresse
        }),
        CustomColumn({
            title: 'Site',
            maxWidth: 1,
            mapDataToValue: (data) => data.site,
            renderCell: function Cell(data) {
                return (
                    <div>
                        <Button size={SIZE.compact} style={{backgroundColor: '#EEEEEE'}}>
                            <StyledLink href={data.value} target='_blank'>
                                <FontAwesomeIcon icon={faLink}/>
                            </StyledLink>
                        </Button>
                    </div>
                );
            },
        }),
        CategoricalColumn({
            title: 'Spécialités',
            mapDataToValue: (data) => data.specialites,
        }),
    ];

    const getEntreprises = () => {
        setLoading(true);
        ApiService.callGet('entreprises?page=0&size=50')
            .then(
                (data) => {
                    let result = [];
                    data.map((e) => {
                        let spec = [];
                        for (const specialite of e.specialites) {
                            spec.push(specialite.libelle)
                        }
                        return result.push({
                            id: e.numEntreprise,
                            data: {
                                numEntreprise: e.numEntreprise,
                                entreprise: e.raisonSociale,
                                responsable: e.nomResp,
                                adresse: e.rueEntreprise + ', ' + e.cpEntreprise + ' ' + e.villeEntreprise,
                                site: e.siteEntreprise,
                                specialites: spec.join(', ')
                            }
                        })
                    })
                    setEntreprises(result);
                    setLoading(false);
                }
            ).catch(
            (error) => {
                setLoading(false);
                Exception.throw(error.toString());
            }
        )
    }

    useEffect(() => {
        getEntreprises();
    }, []);

    function removeRows(ids) {
        const nextRows = entreprises.filter(row => !ids.includes(row.id));
        setEntreprises(nextRows);
    }

    function removeRow(id) {
        removeRows([id]);
        apiService.callDelete('entreprises/' + id)
            .then(() => ToasterService.info('Entreprise supprimée avec succès'))
            .catch((e) => Exception.throw(e.toString()))
    }

    var rowActions;
    if(LoginService.isTeacher()){
        rowActions = [{
            label: 'Delete',
            onClick: ({row}) => removeRow(row.id),
            renderIcon: ({size}) => <FontAwesomeIcon icon={faTimes} color="red"/>,
        }]
    } else {
        rowActions = [];
    }

    return (
        <div className={css({height: '600px', width: 'auto'})}>
            {loading ?
                <div className={style.centeredDiv}>
                    <StyledSpinnerNext/>
                </div>
                :
                <StatefulDataTable columns={columns}
                                   rows={entreprises}
                                   rowHeight={50}
                                   rowActions={rowActions}
                                   emptyMessage={() => <div className={style.centeredDiv}>Aucune donnée</div>}/>
            }

        </div>
    );
}

export default EntreprisesList;
