import React, {useEffect, useState} from 'react';
import style from "./entreprise.module.css";
import {StatefulDataTable, StringColumn} from "baseui/data-table";
import {StyledSpinnerNext} from "baseui/spinner";
import LoginService from "../../services/LoginService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/ApiService";
import ToasterService from "../../services/ToasterService";
import Exception from "../../services/Exception";

function EntrepriseStage(props) {
    const [loading, setLoading] = useState(false); // FIXME
    const [stages, setStages] = useState([]);
    const [rowActions, setRowActions] = useState([]);


    useEffect(() => {

        // FIXME
        console.log(props?.stage)
        let result = props?.stage?.map((s) => {
                return {
                    id: s.numStage,
                    data: {
                        typeStage: 'coucou'
                    }
                }
            });
        console.log(result)
        if(LoginService.isTeacher()){
            setRowActions([{
                label: 'Delete',
                onClick: ({row}) => removeRow(row.id),
                renderIcon: ({size}) => <FontAwesomeIcon icon={faTimes} color="red"/>,
            }]);
        } else {
            setRowActions([props]);
        }
    }, [props?.stage]);

    function removeRows(ids) {
        const nextRows = stages.filter(row => !ids.includes(row.id));
        setStages(nextRows)
    }

    function removeRow(id) {
        removeRows([id]);
        apiService.callDelete('stages/' + id)
            .then(() => ToasterService.info('Stage supprimé avec succès'))
            .catch((e) => Exception.throw(e.toString()))
    }

    const columns = [
        StringColumn({
            title: 'Etudiant',
            mapDataToValue: (data) => data.typeStage,
        }),
        StringColumn({
            title: 'Projet',
            mapDataToValue: (data) => data.typeStage,
        })
    ];


    return (
        <>
            <div align='center'>
                <h1>Stage</h1>
            </div>
            <div style={{height: '600px', width: 'auto'}}>
                {loading ?
                    <div className={style.centeredDiv}>
                        <StyledSpinnerNext/>
                    </div>
                    :
                    <StatefulDataTable columns={columns}
                                       rows={stages}
                                       rowHeight={50}
                                       rowActions={rowActions}
                                       emptyMessage={() => <span className={style.centeredDiv}>Aucune donnée</span>}/>
                }

            </div>
        </>
    );
}

export default EntrepriseStage;
