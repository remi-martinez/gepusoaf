import React, {useState} from 'react'
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Card, StyledBody} from "baseui/card";
import {Button} from "baseui/button";
import {Cell, Grid} from "baseui/layout-grid";
import {DatePicker} from "baseui/datepicker";
import {SIZE} from "baseui/tag";
import {Textarea} from "baseui/textarea";
import {Select} from "baseui/select";

function Inscription() {

    const [formValues, setFormValues] = useState({
        typeStage : "Oui",
        description : "",
        observations : "",
        entreprises : [],
        etudiants : [],
        professeur : []
        
    });

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
                                            value={new Date()}
                                            onChange={({date}) =>
                                                setFormValues(Array.isArray(date) ? date : [date])
                                            }
                                        />
                                    </FormControl>
                                </Cell>
                                <Cell span={6}>
                                    <FormControl label="Date de fin du stage">
                                        <DatePicker
                                            value={new Date()}
                                            onChange={({date}) =>
                                                setFormValues(Array.isArray(date) ? date : [date])
                                            }
                                        />
                                    </FormControl>
                                </Cell>
                                <Cell span={12}>
                                    <FormControl label="Type de stage">
                                        <Input
                                            id="stage-input"
                                            value={formValues.typeStage}
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
                                                }}
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
                                                }}
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
                                        options={[
                                            { label: "AliceBlue", id: "#F0F8FF" },
                                            { label: "AntiqueWhite", id: "#FAEBD7" },
                                            { label: "Aqua", id: "#00FFFF" },
                                            { label: "Aquamarine", id: "#7FFFD4" },
                                            { label: "Azure", id: "#F0FFFF" },
                                            { label: "Beige", id: "#F5F5DC" }
                                        ]}
                                        value={formValues.entreprises}
                                        placeholder="Sélectionner une entreprise "
                                        onChange={params => setFormValues(params.value)}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl label="Étudiant">
                                    <Select
                                        //options= getLesPetitsPd
                                        value={formValues.etudiants}
                                        placeholder="Sélectionner un étudiant"
                                        onChange={params => setFormValues(params.value)}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl label="Professeur">
                                    <Select
                                        //options= getLesGrosPd
                                        value={formValues.professeur}
                                        placeholder="Sélectionner un professeur"
                                        onChange={params => setFormValues(params.value)}
                                    />
                                </FormControl>
                            </div>
                        </StyledBody>
                    </Card>
                    <Button
                        style={{marginTop:10, float: 'right'}}
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
