import React from 'react';
import {Notification} from "baseui/notification";
import EntreprisesList from "./EntreprisesList";
import {Button} from "baseui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function Entreprises() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Entreprises</h1>
            <Notification
                overrides={{
                    Body: {style: {width: 'auto'}},
                }}>
                <p>Retrouvez ici toutes les entreprises !</p>
            </Notification>
            <Button onClick={() => navigate('/entreprises/new')}>
                <FontAwesomeIcon icon={faPlus}/>&nbsp;Nouvelle entreprise
            </Button>
            <EntreprisesList/>
        </>
    );
}

export default Entreprises;
