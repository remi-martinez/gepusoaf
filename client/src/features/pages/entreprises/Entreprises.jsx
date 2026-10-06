import React from 'react';
import EntreprisesList from "./EntreprisesList";
import {Button} from "baseui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import LoginService from "../../services/LoginService";

function Entreprises() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Entreprises</h1>
            {
                LoginService.isTeacher() ? <Button onClick={() => navigate('/entreprises/new')}>
                    <FontAwesomeIcon icon={faPlus}/>&nbsp;Nouvelle entreprise
                </Button> : <></>
            }

            <EntreprisesList/>
        </>
    );
}

export default Entreprises;
