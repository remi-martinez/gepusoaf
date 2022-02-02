import React, {useEffect, useState} from 'react';
import {Input} from "baseui/input";
import {FlexGrid, FlexGridItem} from "baseui/flex-grid";
import {Select} from "baseui/select";
import {Button} from "baseui/button";
import ApiService from "../../services/ApiService";
import apiService from "../../services/ApiService";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ToasterService from "../../services/ToasterService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";
import Utils from "../../shared/Utils";


function StudentForm() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [classes, setClasses] = useState([]);
    const [loadingClasses, setLoadingClasses] = useState(true);
    const [valueNom, setValueNom] = useState("");
    const [valuePrenom, setValuePrenom] = useState("");
    const [valueNomUtilisateur, setValueNomUtilisateur] = useState("");
    const [valueMotDePasse, setValueMotDePasse] = useState("");
    const [valueDateBTS, setValueDateBTS] = useState("");
    const [valueClasse, setValueClasse] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const formType = location?.pathname;
    const itemProps = {
        backgroundColor: 'mono300',
        height: 'scale1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const emptyStringIfNull = (str) => {
        return str ? str : '';
    }

    const emptyArrayIfNull = (arr) => {
        return arr ? arr : [];
    }

    useEffect(() => {
        setLoadingClasses(true);
        ApiService.callGet('classes')
            .then(
                (result) => {
                    let _classes = []
                    result.forEach((c) => {
                        _classes.push({
                            numClasse: c.numClasse,
                            nomClasse: c.nomClasse
                        });
                    })
                    setClasses(_classes);
                    setLoadingClasses(false);
                })
            .catch(() => {
                setLoadingClasses(false);
                Exception.throw('Les classes n\'ont pas pu être chargées.');
            })


        if (formType.includes('edit')) {
            ApiService.callGet('etudiants/' + id)
                .then((result) => {
                    if (result?.error || result === null) {
                        ToasterService.error(result?.error)
                        setLoading(false);
                        setError(true);
                    } else {
                        setValueNom(emptyStringIfNull(result?.nomEtudiant));
                        setValuePrenom(emptyStringIfNull(result?.prenomEtudiant));
                        setValueNomUtilisateur(emptyStringIfNull(result?.login));
                        setValueMotDePasse(emptyStringIfNull(result?.mdp));
                        setValueDateBTS(emptyStringIfNull(result?.anneeObtention));
                        setValueClasse(emptyArrayIfNull([{
                            numClasse: result.numClasse.numClasse,
                            nomClasse: result.numClasse.nomClasse
                        }]));
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    Exception.throw(error.toString())
                    setLoading(true);
                    setError(false);
                })
        }
    }, [formType, id]);

    const formIsValid = () => {
        let valid = true;
        const requiredFields = [valueNom, valuePrenom, valueNomUtilisateur, valueMotDePasse, valueClasse]

        if (valueMotDePasse.length < 8)
            return false;

        requiredFields.forEach((f) => {
            if (!f) {
                valid = false;
            }
        })
        return valid;
    }

    const onClick = function () {
        setLoading(true);
        const body = {
            'nomEtudiant': valueNom,
            'prenomEtudiant': valuePrenom,
            'anneeObtention': valueDateBTS,
            'login': valueNomUtilisateur,
            'mdp': valueMotDePasse,
            'enActivite': true,
            'numClasse': valueClasse[0]?.numClasse
        }

        if (formType.includes('new')) {
            apiService.callPost('etudiants', body)
                .then((result) => {
                    setLoading(false);
                    ToasterService.success('Stagiaire ajouté avec succès')
                    navigate('/stagiaires/' + result?.numEtudiant);
                })
                .catch(e => {
                    setLoading(false);
                    setError(true);
                    ToasterService.error('Une erreur est survenue')
                    Exception.throw(e.toString())
                });
        } else if (formType.includes('edit')) {
            apiService.callPut('etudiants/' + id, body)
                .then(() => {
                    setLoading(false);
                    ToasterService.success('Stagiaire modifié avec succès')
                    navigate('/stagiaires/' + id);
                })
                .catch(e => {
                    setLoading(false);
                    setError(true);
                    ToasterService.error('Une erreur est survenue')
                    Exception.throw(e.toString())
                });
        }
    }

    return (
        <>
            {
                loading ?
                    <div style={{display: 'flex', padding: '5%', justifyContent: 'center'}}><StyledSpinnerNext/>
                    </div> :
                    error ? Utils.errorDiv('/stagiaires') :
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
                                <FlexGridItem>
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
                                        clearOnEscape
                                    />
                                </FlexGridItem>
                                <FlexGridItem>
                                    <label htmlFor="classe">Classe *</label>
                                    {
                                        loadingClasses ? Utils.skeleton(1) : <Select
                                            {...itemProps}
                                            name="classe"
                                            valueKey="numClasse"
                                            labelKey="nomClasse"
                                            clearOnEscape
                                            required
                                            options={classes}
                                            value={valueClasse}
                                            onChange={params => setValueClasse(params.value)}
                                        />
                                    }

                                </FlexGridItem>
                            </FlexGrid>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button onClick={() => navigate('/stagiaires')}>
                                    Retour
                                </Button>
                                <p>Les champs avec le symbole * sont obligatoires</p>
                                <Button style={{float: "right", marginRight: "10"}} type="submit"
                                        disabled={!formIsValid()}
                                        onClick={() => onClick()}>
                                    Enregistrer
                                </Button>
                            </div>
                        </form>
            }
        </>
    );
}

export default StudentForm;
