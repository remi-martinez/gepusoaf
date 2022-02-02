import React, {useEffect, useState} from 'react';
import style from "./entreprise.module.css";
import {CustomColumn, StatefulDataTable, StringColumn} from "baseui/data-table";
import {useStyletron} from "baseui";
import {Table} from "baseui/table";

function EntrepriseStage(props) {
    const [stages, setStages] = useState([]);


    useEffect(() => {
        let result = props?.entreprise?.stages?.map((s) => {
            return {
                id: s.numStage,
                data: {
                    nomEtudiant: s?.numEtudiant?.prenomEtudiant + ' ' + s?.numEtudiant?.nomEtudiant,
                    typeStage: s.typeStage,
                    descProjet: s.descProjet,
                }
            }
        });
        setStages(result)
    }, [props?.stage]);

    const columns = [
        StringColumn({
            title: 'Etudiant',
            mapDataToValue: (data) => data.nomEtudiant,
        }),
        StringColumn({
            title: 'Type',
            mapDataToValue: (data) => data.typeStage,
        }),
        StringColumn({
            title: 'Projet',
            mapDataToValue: (data) => data.descProjet,
        })
    ];


    return (
        <>
            <div align='center'>
                <h1>Stages</h1>
            </div>
            <div style={{height: '600px', width: 'auto'}}>
                <StatefulDataTable columns={columns}
                                   rows={stages}
                                   rowHeight={50}
                                   emptyMessage={() => <span className={style.centeredDiv}>Aucune donnée</span>}/>

            </div>
        </>
    );
}

export default EntrepriseStage;
