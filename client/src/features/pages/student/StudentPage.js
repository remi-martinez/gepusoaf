import React from 'react';
import {Button} from "baseui/button";
import {StatefulDataTable, StringColumn} from "baseui/data-table";
import {useNavigate} from "react-router-dom";

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

    const rows = [{
        id:'0',
        data: [
            'Etudiants','Entreprise','Professeur'
        ]
    }];

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
            <div style={{height: '300px'}}>
                <StatefulDataTable
                    columns={columns}
                    rows={rows}
                />
            </div>
        </>
    );

}

export default StudentPage;
