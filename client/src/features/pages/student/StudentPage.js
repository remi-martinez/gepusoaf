import React from 'react';
import {Button, SIZE} from "baseui/button";
import {CustomColumn, StatefulDataTable, StringColumn} from "baseui/data-table";
import {useNavigate} from "react-router-dom";
import Show from 'baseui/icon/show.js';
import Overflow from 'baseui/icon/overflow.js';
import Delete from 'baseui/icon/delete.js';
import {ButtonGroup} from "baseui/button-group";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHandshake, faPen, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Notification} from "baseui/notification";
import StudentList from "./StudentList";

const marginSide = {
    marginRight: 10
};

function StudentPage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Stagiaires</h1>
            <Button onClick={() => navigate('/stagiaire/ajouter')}>
                <FontAwesomeIcon icon={faPlus}/>&nbsp;Ajouter un étudiant
            </Button>
            <StudentList/>
        </>
    );
}

export default StudentPage;
