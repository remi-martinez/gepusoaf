import React, {useState} from 'react'
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Card, StyledAction, StyledBody} from "baseui/card";
import {Button} from "baseui/button";

function Inscription() {
    const [value, setValue] = useState('');
    return (
        <>
            <h1>Inscription</h1>
            <div className="inscription-flex">
                <Card title="Contact">
                    <StyledBody>
                        <div>
                            <FormControl label="Entreprise">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Étudiant">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Professeur">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                    </StyledBody>
                    <StyledAction>
                        <Button>Enregistrer</Button>
                    </StyledAction>
                </Card>
                <Card title="Description du stage">
                    <StyledBody>
                        <div>
                            <FormControl label="Date de début du stage">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Date de fin du stage">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Type de stage">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Description du stage">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Observations">
                                <Input
                                    id="input-id"
                                    value={value}
                                    onChange={event => setValue(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                    </StyledBody>
                    <StyledAction>
                        <Button>Enregistrer</Button>
                    </StyledAction>
                </Card>
            </div>
        </>
    );
}

export default Inscription
