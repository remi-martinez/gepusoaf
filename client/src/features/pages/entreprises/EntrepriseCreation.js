import React from 'react';
import {Button} from "baseui/button";
import {useNavigate} from "react-router-dom";
import EntrepriseForm from "./EntrepriseForm";

function EntrepriseCreation() {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={() => navigate('/entreprises')}>
                Retour
            </Button>
            <h1>Nouvelle entreprise</h1>
            <EntrepriseForm formType={'creation'}/>
        </>
    );
}

export default EntrepriseCreation;
