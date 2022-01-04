import React, {useState} from 'react';
import {Card, StyledAction, StyledBody} from "baseui/card";
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Button} from "baseui/button";
import {Radio, RadioGroup} from "baseui/radio";
import {ALIGN} from "baseui/header-navigation";
import {Notification} from "baseui/notification";

function LoginPage() {
    const [value, setValue] = useState('');
    return(
        <>
            <Notification
                classN
                overrides={{
                    Body: {
                        style: () => ({
                            outline: 'red'
                        })
                    }
                }}>
                <h1>Gestion des stages</h1>
                <p>Vous n'êtes pas connecté. Identifiez-vous pour poursuivre la navigation.</p>
            </Notification>
            <Card title="Connexion">
                <StyledBody>
                    <div>
                        <FormControl label="Login">
                            <Input
                                id="input-id"
                                value={value}
                                onChange={event => setValue(event.currentTarget.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl label="Mot de passe">
                            <Input
                                id="password"
                                type="password"
                                value={value}
                                onChange={event => setValue(event.currentTarget.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl label="Vous êtes">
                            <RadioGroup
                                value={value}
                                onChange={e => setValue(e.currentTarget.value)}
                                name="number"
                                align={ALIGN.vertical}
                            >
                                <Radio value="student">Étudiant</Radio>
                                <Radio value="teacher">Professeur</Radio>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </StyledBody>
                <StyledAction>
                    <Button>Enregistrer</Button>
                </StyledAction>
            </Card>
        </>
    );
}

export default LoginPage;
