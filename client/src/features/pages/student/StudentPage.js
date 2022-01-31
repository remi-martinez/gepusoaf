import React from 'react';
import {Button} from "baseui/button";
import {StatefulDataTable, StringColumn} from "baseui/data-table";
import {useNavigate} from "react-router-dom";
import Show from 'baseui/icon/show.js';
import Overflow from 'baseui/icon/overflow.js';
import Delete from 'baseui/icon/delete.js';

const marginSide = {
    marginRight: 10
};

function StudentPage() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/stagiaire/ajouter');

    const columns = [
        StringColumn({
            title: 'Etudiants',
            mapDataToValue: (data) => data[0],
        }),
        StringColumn({
            title: 'Entreprise',
            mapDataToValue: (data) => data[1],
        }),
        StringColumn({
            title: 'Professeur',
            mapDataToValue: (data) => data[2],
        }),
    ];

    const initialRows = [{
        id:'0',
        data: [
            'Etudiants','Entreprise','Professeur'
        ]
    }];

    const [rows, setRows] = React.useState(initialRows);
    function flagRows(ids) {
        const nextRows = rows.map(row => {
            if (ids.includes(row.id)) {
                const nextData = [...row.data];
                nextData[1] = !nextData[1];
                return {...row, data: nextData};
            }
            return row;
        });
        setRows(nextRows);
    }
    function removeRows(ids) {
        const nextRows = rows.filter(row => !ids.includes(row.id));
        setRows(nextRows);
    }
    function removeRow(id) {
        removeRows([id]);
    }
    const batchActions = [
        {
            label: 'Voir',
            onClick: ({selection, clearSelection}) => {
                flagRows(selection.map(r => r.id));
                clearSelection();
            },
            renderIcon: ({size}) => <Show size={size} />,
        },
        {
            label: 'Editer',
            onClick: ({clearSelection}) => clearSelection(),
            renderIcon: ({size}) => <Overflow size={size} />,

        },
        {
            label: 'Supprimer',
            onClick: ({selection, clearSelection}) => {
                removeRows(selection.map(r => r.id));
                clearSelection();
            },
            renderIcon: ({size}) => <Delete size={size} />,
        },
    ];
    const rowActions = [
        {
            label: 'Delete',
            onClick: ({row}) => removeRow(row.id),
            renderIcon: ({size}) => <Delete size={size} />,
        },
    ];

    return (
        <>
            <div>
                <Button
                    style={marginSide}
                    startEnhancer="➕"
                    onClick={handleClick}>
                    Ajouter un stagiaire

                </Button>
            </div>
            <div style={{height: '600px'}}>
                <StatefulDataTable
                    batchActions={batchActions}
                    rowActions={rowActions}
                    columns={columns}
                    rows={rows}
                />
            </div>
        </>
    );

}

export default StudentPage;
