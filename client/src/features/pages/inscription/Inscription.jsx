import React, {useEffect, useState} from 'react'
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Card, StyledBody} from "baseui/card";
import {Button} from "baseui/button";
import {Cell, Grid} from "baseui/layout-grid";
import {DatePicker} from "baseui/datepicker";
import {SIZE} from "baseui/tag";
import {Textarea} from "baseui/textarea";
import {Select, TYPE} from "baseui/select";
import ApiService from "../../services/ApiService";
import apiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import ToasterService from "../../services/ToasterService";
import {useNavigate} from "react-router-dom";
import Utils from "../../shared/Utils";

function Inscription() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [professeurs, setProfesseurs] = useState([]);
    const [etudiants, setEtudiants] = useState([]);
    const [entreprises, setEntreprises] = useState([]);
    const navigate = useNavigate();


    const [formValues, setFormValues] = useState({
        debutStage: new Date(),
        finStage: new Date(),
        typeStage: "",
        description: "",
        observations: "",
        entreprise: {label: '', id: ''},
        etudiant: {label: '', id: ''},
        professeur: {label: '', id: ''},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            debutStage: formValues?.debutStage,
            finStage: formValues?.finStage,
            typeStage: formValues?.typeStage,
            descProjet: formValues?.description,
            observationStage: formValues?.observations,
            numEtudiant: formValues?.etudiant[0]?.id,
            numProf: formValues?.professeur[0]?.id,
            numEntreprise: formValues?.entreprise[0]?.id,
        }
        apiService.callPost('stages', body)
            .then(() => {
                setLoading(false);
                ToasterService.success('Stage ajouté avec succès')
                navigate('/entreprises/' + body.numEntreprise);
            })
            .catch(e => {
                setLoading(false);
                setError(true);
                ToasterService.error('Une erreur est survenue')
                Exception.throw(e.toString())
            });
    }

    const formIsValid = () => {
        // TODO
        let valid = true

        const requiredFields = [
            formValues?.debutStage,
            formValues?.finStage,
            formValues?.typeStage,
            formValues?.etudiant[0],
            formValues?.professeur[0],
            formValues?.entreprise[0]
        ]

        requiredFields.forEach((f) => {
            if (!f) {
                valid = false;
            }
        })
        return valid;
    }


    const getProfesseurs = () => {
        ApiService.callGet('professeurs')
            .then(
                (data) => {
                    setProfesseurs(data)
                },
                (error) => {
                    Exception.throw(error.toString())
                }
            )
    }

    const generateProfList = () => {
        let profs = [];
        professeurs.map((p) => {
            return profs.push({label: `${p.prenomProf} ${p.nomProf}`, id: p.numProf})
        });
        return profs;
    }

    const getEntreprises = () => {
        ApiService.callGet('entreprises')
            .then(
                (data) => {
                    setEntreprises(data)
                },
                (error) => {
                    Exception.throw(error.toString())
                }
            )
    }
    const generateEntreprisesList = () => {
        let entr = [];
        entreprises.map((e) => {
            return entr.push({label: e.raisonSociale, id: e.numEntreprise})
        })
        return entr;
    }

    const getEtudiants = () => {
        ApiService.callGet('etudiants')
            .then(
                (data) => {
                    setEtudiants(data)
                },
                (error) => {
                    Exception.throw(error.toString())
                }
            )
    }

    const generateEtudiantsList = () => {
        let etu = [];
        etudiants.map((e) => {
            return etu.push({label: `${e.nomEtudiant} ${e.prenomEtudiant}`, id: e.numEtudiant})
        });
        return etu;
    }

    useEffect(() => {
        getProfesseurs();
        getEtudiants();
        getEntreprises();
    }, []);

    return (
        <>
            {
                loading ? Utils.skeleton(6) :
                    error ? Utils.errorDiv('/inscription') :
                        <Grid>
                            <Cell span={7}>
                                <Card title="Description du stage">
                                    <StyledBody>
                                        <Grid>
                                            <Cell span={6}>
                                                <FormControl label="Date de début du stage *">
                                                    <DatePicker
                                                        value={formValues.debutStage}
                                                        formatString="dd/MM/yyyy"
                                                        placeholder="01/01/2000"
                                                        mask="99/99/9999"
                                                        onChange={({date}) =>
                                                            // setFormValues(Array.isArray(date) ? 'date' : [date])
                                                            setFormValues({...formValues, debutStage: date})
                                                        }
                                                    />
                                                </FormControl>
                                            </Cell>
                                            <Cell span={6}>
                                                <FormControl label="Date de fin du stage *">
                                                    <DatePicker
                                                        value={formValues.finStage}
                                                        formatString="dd/MM/yyyy"
                                                        placeholder="31/12/2000"
                                                        mask="99/99/9999"
                                                        onChange={({date}) =>
                                                            // setFormValues(Array.isArray(date) ? date : [date])
                                                            setFormValues({...formValues, finStage: date})
                                                        }
                                                    />
                                                </FormControl>
                                            </Cell>
                                            <Cell span={12}>
                                                <FormControl label="Type de stage *">
                                                    <Input
                                                        id="stage-input"
                                                        value={formValues.typeStage}
                                                        placeholder="Stage d'observation"
                                                        onChange={event => setFormValues({
                                                            ...formValues,
                                                            typeStage: event.currentTarget.value
                                                        })}
                                                    />
                                                </FormControl>
                                            </Cell>
                                            <Cell span={12}>
                                                <FormControl label="Description du stage">
                                                    <Textarea
                                                        id="desc-input"
                                                        overrides={{
                                                            Input: {
                                                                style: {
                                                                    maxHeight: '300px',
                                                                    minHeight: '50px',
                                                                    width: '100vw',
                                                                    resize: 'height',
                                                                },
                                                            },
                                                            InputContainer: {
                                                                style: {
                                                                    maxWidth: '100%',
                                                                    width: 'min-content',
                                                                },
                                                            }
                                                        }}
                                                        value={formValues.description}
                                                        onChange={event => setFormValues({
                                                            ...formValues,
                                                            description: event.currentTarget.value
                                                        })}
                                                    />
                                                </FormControl>
                                            </Cell>
                                            <Cell span={12}>
                                                <FormControl label="Observations">
                                                    <Textarea
                                                        id="observations-input"
                                                        overrides={{
                                                            Input: {
                                                                style: {
                                                                    maxHeight: '300px',
                                                                    minHeight: '50px',
                                                                    width: '100vw',
                                                                    resize: 'height',
                                                                },
                                                            },
                                                            InputContainer: {
                                                                style: {
                                                                    maxWidth: '100%',
                                                                    width: 'min-content',
                                                                },
                                                            }
                                                        }
                                                        }
                                                        value={formValues.observations}
                                                        onChange={event => setFormValues({
                                                            ...formValues,
                                                            observations: event.currentTarget.value
                                                        })}
                                                    />
                                                </FormControl>
                                            </Cell>
                                        </Grid>
                                    </StyledBody>
                                </Card>
                            </Cell>
                            <Cell span={5}>
                                <Card title="Contact">
                                    <StyledBody>
                                        <div>
                                            <FormControl label="Entreprise *">
                                                <Select
                                                    options={generateEntreprisesList()}
                                                    value={formValues.entreprise}
                                                    type={TYPE.search}
                                                    maxDropdownHeight="300px"
                                                    placeholder='Sélectionner une entreprise...'
                                                    onChange={params => setFormValues({
                                                        ...formValues,
                                                        entreprise: params.value
                                                    })}
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl label="Etudiant *">
                                                <Select
                                                    options={generateEtudiantsList()}
                                                    value={formValues.etudiant}
                                                    type={TYPE.search}
                                                    maxDropdownHeight="300px"
                                                    placeholder='Sélectionner un étudiant...'
                                                    onChange={params => setFormValues({
                                                        ...formValues,
                                                        etudiant: params.value
                                                    })}
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl label="Professeur *">
                                                <Select
                                                    options={generateProfList()}
                                                    value={formValues.professeur}
                                                    type={TYPE.search}
                                                    maxDropdownHeight="300px"
                                                    placeholder='Sélectionner un professeur...'
                                                    onChange={params => setFormValues({
                                                        ...formValues,
                                                        professeur: params.value
                                                    })}
                                                />
                                            </FormControl>
                                        </div>
                                    </StyledBody>
                                </Card>
                                <Button style={{marginTop: 10, float: 'right'}}
                                        size={SIZE.large} onClick={(e) => handleSubmit(e)}
                                        disabled={!formIsValid()}
                                >
                                    Ajouter ce stage
                                </Button>
                            </Cell>
                        </Grid>
            }
        </>
    );
}

export default Inscription
