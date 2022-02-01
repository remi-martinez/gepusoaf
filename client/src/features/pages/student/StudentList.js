import React, {useEffect, useState} from 'react';
import {useStyletron} from 'baseui';
import {CustomColumn, StatefulDataTable, StringColumn,} from 'baseui/data-table';
import {ButtonGroup} from "baseui/button-group";
import {Button, SIZE} from "baseui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import ApiService from "../../services/ApiService";
import apiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";
import style from '../entreprises/entreprise.module.css'
import {useNavigate} from "react-router-dom";

function StudentList() {
    const [css] = useStyletron();
    const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState([]);
    const navigate = useNavigate()

    const columns = [
        CustomColumn({
            title: 'Opération',
            maxWidth: 100,
            mapDataToValue: (data) => data.numEtudiant,
            renderCell: function Cell(data) {
                return (
                    <div>
                        <ButtonGroup size={SIZE.compact}>
                            <Button onClick={() => navigate('/stagiaires/' + data.value)}>
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
            title: 'Entreprise(s)',
            mapDataToValue: (data) => data.entreprises
        }),
        StringColumn({
            title: 'Professeur(s)',
            style: '',
            mapDataToValue: (data) => data.profs,
        }),
    ];

    const getStudent = () => {
        setLoading(true);
        ApiService.callGet('etudiants?page=0&size=50')
            .then(
                (data) => {
                    let result = [];
                    data.map((s) => {
                        let entreprises = [];
                        let profs = [];
                        for (const stage of s.stages){
                            profs.push(stage.numProf.nomProf +" " + stage.numProf.prenomProf)
                            entreprises.push(stage.numEntreprise.raisonSociale)
                        }
                        return result.push({
                            id: s.numEtudiant,
                            data: {
                                numEtudiant: s.numEtudiant,
                                nomEtudiant: s.nomEtudiant + " " + s.prenomEtudiant,
                                entreprises: entreprises.join(" / "),
                                profs: profs.join(" / "),
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

    const getStages = () => {
        setLoading(true);
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
        apiService.callDelete('etudiants/' + id,)
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
