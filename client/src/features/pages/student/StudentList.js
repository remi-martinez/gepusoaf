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
import style from '../entreprises/entreprise.module.css'
import {useNavigate} from "react-router-dom";
import {Delete} from "baseui/icon";
import apiService from "../../services/ApiService";

function StudentList() {
    const [css] = useStyletron();
    const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState([]);
    const navigate = useNavigate()

    const columns = [
        CustomColumn({
            title: 'Opération',
            maxWidth: 100,
            mapDataToValue: (data) => data.numEntreprise,
            renderCell: function Cell(data) {
                return (
                    <div>
                        <ButtonGroup size={SIZE.compact}>
                            <Button onClick={() => navigate('/student/' + data.id)}>
                                <FontAwesomeIcon icon={faEye} color='#1E57B7'/>
                            </Button>
                            <Button>
                                <FontAwesomeIcon icon={faPen}/>
                            </Button>
                        </ButtonGroup>
                    </div>
                );
            },
        }),
        StringColumn({
            title: 'Etudiant',
            mapDataToValue: (data) => data.nomEtudiant,
        }),
        StringColumn({
            title: 'Entreprise',
            mapDataToValue: (data) => data.entreprise,
        }),
        StringColumn({
            title: 'Professeur',
            style: '',
            mapDataToValue: (data) => data.numClasse,
        }),
    ];

    const getStudent = () => {
        setLoading(true);
        ApiService.callGet('etudiants')
            .then(
                (data) => {
                    let result = [];
                    data._embedded.etudiants.map((s) => {
                        return result.push({
                            id: s.numEtudiant,
                            data: {
                                nomEtudiant: s.nomEtudiant + " " + s.prenomEtudiant,
                                entreprise: s.entreprise,
                                classe: s.numClasse
                            }
                        })
                    })
                    setStudent(result);
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
        getStudent();
    }, []);
    function removeRows(ids) {
        const nextRows = student.filter(row => !ids.includes(row.id));
        setStudent(nextRows);
    }
    function removeRow(id) {
        removeRows([id]);
        apiService.callDelete('etudiants/'+id,)
    }
    const rowActions = [
        {
            label: 'Delete',
            onClick: ({row}) => removeRow(row.id),
            renderIcon: ({size}) => <FontAwesomeIcon icon={faTimes} color="red"/>,
        },
    ];

    return (
        <div className={css({height: '600px', width: 'auto'})}>
            {loading ?
                <div className={style.centeredDiv}>
                    <StyledSpinnerNext/>
                </div>
                :
                <StatefulDataTable columns={columns}
                                   rows={student}
                                   rowActions={rowActions}
                                   rowHeight={50}
                                   emptyMessage={() => <div className={style.centeredDiv}>Aucune donnée</div>}/>
            }

        </div>
    );
}

export default StudentList;