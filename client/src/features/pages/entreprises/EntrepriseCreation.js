import React from 'react';
import {Button, SIZE} from "baseui/button";
import {useNavigate} from "react-router-dom";
import {Card, StyledBody} from "baseui/card";
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import style from './entreprise.module.css'
import {Textarea} from "baseui/textarea";
import {Cell, Grid} from "baseui/layout-grid";
import EntrepriseForm from "./EntrepriseForm";

function EntrepriseCreation() {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={() => navigate('/entreprises')}>
                Retour
            </Button>
            <h1>Nouvelle entreprise</h1>
            <EntrepriseForm/>
        </>
    );
}

export default EntrepriseCreation;
