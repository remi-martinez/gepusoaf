import React from 'react';
import {Button} from "baseui/button";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import StudentList from "./StudentList";

const marginSide = {
    marginRight: 10
};

function StudentPage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Stagiaires</h1>
            <Button onClick={() => navigate('/stagiaires/ajouter')}>
                <FontAwesomeIcon icon={faPlus}/>&nbsp;Ajouter un étudiant
            </Button>
            <StudentList/>
        </>
    );
}

export default StudentPage;
