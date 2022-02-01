import React from 'react';
import {Input} from "baseui/input";
import {FlexGrid, FlexGridItem} from "baseui/flex-grid";
import {Select} from "baseui/select";
import {Button} from "baseui/button";
import ApiService from "../../services/ApiService";
import apiService from "../../services/ApiService";
import {useNavigate} from "react-router-dom"; // add this package to your repo with `$ yarn add email-validator`


function StudentAddPage() {
    const [valueNom, setValueNom] = React.useState("");
    const [valuePrenom, setValuePrenom] = React.useState("");
    const [valueNomUtilisateur, setValueNomUtilisateur] = React.useState("");
    const [valueMotDePasse, setValueMotDePasse] = React.useState("");
    const [valueDateBTS, setValueDateBTS] = React.useState("");
    const [valueClasse, setValueClasse] = React.useState("");
    const itemProps = {
        backgroundColor: 'mono300',
        height: 'scale1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const navigate = useNavigate();
    const onClick = function (){
        apiService.callPost('etudiants', {
            'nomEtudiant': valueNom,
            'prenomEtudiant': valuePrenom,
            'anneeObtention': valueDateBTS,
            'login': valueNomUtilisateur,
            'mdp': valueMotDePasse,
            'enActivite': true,
            'numClasse': valueClasse
        }).then(() => {
            navigate('/stagiaires');
        })
    }

    var classes = []
    ApiService.callGet('classes').then(
        (data) => {

            data.map((c) => {
                    return classes.push({
                        id: c.numClasse,
                        label: c.nomClasse
                    })
                }
            )
        }
    )

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <FlexGrid
                    flexGridColumnCount={3}
                    flexGridColumnGap="scale800"
                    flexGridRowGap="scale800"
                >
                    <FlexGridItem>
                        <label htmlFor="nom">Nom *</label>
                        <Input
                            {...itemProps}
                            name="nom"
                            value={valueNom}
                            onChange={e => setValueNom(e.target.value)}
                            type="text"
                            placeholder="Doe"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="prenom">Prénom *</label>
                        <Input
                            {...itemProps}
                            name="prenom"
                            value={valuePrenom}
                            onChange={e => setValuePrenom(e.target.value)}
                            type="text"
                            placeholder="John"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="nomUtilisateur">Nom d'utilisateur *</label>
                        <Input
                            {...itemProps}
                            name="nomUtilisateur"
                            value={valueNomUtilisateur}
                            onChange={e => setValueNomUtilisateur(e.target.value)}
                            type="text"
                            placeholder="(8 caractères)"
                            maxLength={8}
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem >
                        <label htmlFor="motDePasse">Mot de passe *</label>
                        <Input
                            {...itemProps}
                            name="motDePasse"
                            value={valueMotDePasse}
                            onChange={e => setValueMotDePasse(e.target.value)}
                            type="password"
                            placeholder="(Entre 8 et 30 caractères)"
                            maxLength={30}
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="dateBTS">Date d'obtention du BTS</label>
                        <Input
                            {...itemProps}
                            name="dateBTS"
                            value={valueDateBTS}
                            onChange={e => setValueDateBTS(e.target.value)}
                            type="Date"
                            placeholder="Doe"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="classe">Classe *</label>
                        <Select
                            {...itemProps}
                            name="classe"
                            value={valueClasse}
                            clearOnEscape
                            required
                            options={classes}
                            onChange={params => setValueClasse(params.value)}
                        />
                    </FlexGridItem>
                </FlexGrid>

            </form>
            <p>Les champs avec le symbole * sont obligatoires</p>
            <Button style={{float: "right", marginRight: "10"}} type="submit" onClick={() => onClick()}>Ajouter</Button>
        </>
    );

}

export default StudentAddPage;
