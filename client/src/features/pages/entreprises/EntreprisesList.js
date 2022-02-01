import React, {useEffect, useState} from 'react';
import {useStyletron} from 'baseui';
import {CategoricalColumn, CustomColumn, StatefulDataTable, StringColumn,} from 'baseui/data-table';
import {ButtonGroup} from "baseui/button-group";
import {Button, SIZE} from "baseui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faHandshake, faLink, faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import {StyledLink} from "baseui/link";
import ApiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";
import style from './entreprise.module.css'
import {useNavigate} from "react-router-dom";
import LoginService from "../../services/LoginService";
import loginService from "../../services/LoginService";
import apiService from "../../services/ApiService";

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
                var buttonProf;
                if(loginService.getUserRolesCookie() !== "teacher"){
                     buttonProf =
                        <Button onClick={() => navigate('/entreprises/' + data.value + '/edit')}>
                            <FontAwesomeIcon icon={faPen}/>
                        </Button>
                }else{
                    buttonProf = <></>
                }
                return (
                    <div>
                        <ButtonGroup size={SIZE.compact}>
                            <Button onClick={() => navigate('/entreprises/' + data.value)}>
                                <FontAwesomeIcon icon={faEye} color='#1E57B7'/>
                            </Button>
                            <Button>
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
            style: '',
            mapDataToValue: (data) => data.adresse,
            renderCell: function Cell(data) {
                return (
                    <div>
                        Z : {data.value}
                    </div>
                );
            }
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
            title: 'Spécialité',
            mapDataToValue: (data) => data.specialite,
        }),
    ];

    const getEntreprises = () => {
        setLoading(true);
        ApiService.callGet('entreprises')
            .then(
                (data) => {
                    let result = [];
                    data._embedded.entreprises.map((e) => {
                        return result.push({
                            id: e.numEntreprise,
                            data: {
                                numEntreprise: e.numEntreprise,
                                entreprise: e.raisonSociale,
                                responsable: e.nomResp,
                                adresse: e.rueEntreprise + ', ' + e.cpEntreprise + ' ' + e.villeEntreprise,
                                site: e.siteEntreprise,
                                specialite: 'Spécialité' // FIXME
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
        apiService.callDelete('entreprises/'+id)
    }
    var rowActions;
    if(loginService.getUserRolesCookie() !== "teacher"){
        rowActions = [{
            label: 'Delete',
            onClick: ({row}) => removeRow(row.id),
            renderIcon: ({size}) => <FontAwesomeIcon icon={faTimes} color="red"/>,
        }]
    }else{
        rowActions=[];
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