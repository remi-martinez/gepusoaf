import React, {useEffect, useState} from 'react'
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Card, StyledBody} from "baseui/card";
import {Button} from "baseui/button";
import {Cell, Grid} from "baseui/layout-grid";
import {DatePicker} from "baseui/datepicker";
import {SIZE} from "baseui/tag";
import {Textarea} from "baseui/textarea";
import {Select} from "baseui/select";
import ApiService from "../../services/ApiService";
import ToasterService from "../../services/ToasterService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";

function Inscription() {

    const [professeurs, setProfesseurs] = useState([]);
    const [etudiants, setEtudiants] = useState([]);
    const [entreprises, setEntreprises] = useState([]);


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


    const itemProps = {
        backgroundColor: 'mono300',
        height: 'scale1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
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
            return profs.push({label: `${p.prenomProf} ${p.nomProf}`, id: p.login})
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
            <Grid>
                <Cell span={7}>
                    <Card title="Description du stage">
                        <StyledBody>
                            <Grid>
                                <Cell span={6}>
                                    <FormControl label="Date de début du stage">
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
                                    <FormControl label="Date de fin du stage">
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
                                    <FormControl label="Type de stage">
                                        <Input
                                            id="stage-input"
                                            value={formValues.typeStage}
                                            placeholder="Stage d'observation"
                                            onChange={event => setFormValues(event.currentTarget.value)}
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
                                                        width: '100vw', // fill all available space up to parent max-width
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
                                            value={formValues.description}
                                            onChange={event => setFormValues(event.currentTarget.value)}
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
                                                        width: '100vw', // fill all available space up to parent max-width
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
                                            onChange={event => setFormValues(event.currentTarget.value)}
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
                                <FormControl label="Entreprise">
                                    <Select
                                        options={generateEntreprisesList()}
                                        value={formValues.entreprise}
                                        onChange={params => setFormValues({...formValues, entreprise: params.value})}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl label="Etudiant">
                                    <Select
                                        options={generateEtudiantsList()}
                                        value={formValues.etudiant}
                                        onChange={params => setFormValues({...formValues, etudiant: params.value})}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl label="Professeur">
                                    <Select
                                        options={generateProfList()}
                                        value={formValues.professeur}
                                        onChange={params => setFormValues({...formValues, professeur: params.value})}
                                    />
                                </FormControl>
                            </div>
                        </StyledBody>
                    </Card>
                    <Button
                        style={{marginTop: 10, float: 'right'}}
                        size={SIZE.large}
                    >
                        Enregistrer
                    </Button>
                </Cell>
            </Grid>
        </>
    );
}

export default Inscription
