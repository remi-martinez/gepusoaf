import React from 'react';
import {Button} from "baseui/button";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import StudentList from "./StudentList";
import LoginService from "../../services/LoginService";

function StudentPage() {
    const navigate = useNavigate();
    let buttonAdd = <Button onClick={() => navigate('/stagiaires/new')}>
        <FontAwesomeIcon icon={faPlus}/>&nbsp;Ajouter un étudiant
    </Button>;


    return (
        <>
            <h1>Stagiaires</h1>
            {LoginService.isTeacher() ? buttonAdd : <></>}
            <StudentList/>
        </>
    );
}

export default StudentPage;
