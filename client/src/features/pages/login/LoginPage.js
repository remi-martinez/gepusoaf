import React, {useState} from 'react';
import {Card, StyledAction, StyledBody} from "baseui/card";
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Button} from "baseui/button";
import {Radio, RadioGroup} from "baseui/radio";
import {ALIGN} from "baseui/header-navigation";
import {Notification} from "baseui/notification";
import LoginService from "../../services/LoginService";
import ToasterService from "../../services/ToasterService";
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('student');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleButtonClick = (e) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
        e.preventDefault();
        LoginService.login(login, password, status)
            .then((result) => {
                if(status === 'teacher') {
                    const newUser = {
                        connected: true,
                        login: result.login,
                        firstname: result.prenomProf,
                        lastname: result.nomProf,
                        status: 'teacher'
                    }
                    props.onUserChange(newUser);
                    LoginService.setUserCookie(newUser);
                } else if (status === 'student') {
                    const newUser = {
                        connected: true,
                        login: result.login,
                        firstname: result.prenomEtudiant,
                        lastname: result.nomEtudiant,
                        status: 'student'
                    }
                    props.onUserChange(newUser)
                    LoginService.setUserCookie(newUser);
                }
                setLoading(false);
                navigate('/')
                ToasterService.success("Connecté avec succès !")
            }, () => {
                setLoading(false)
                ToasterService.error("Erreur de connexion")
            });
    }

    return (
        <>
            <Notification
                overrides={{
                    Body: {style: {width: 'auto'}},
                }}>
                <h1>Gestion des stages</h1>
                <p>Vous n'êtes pas connecté. Identifiez-vous pour poursuivre la navigation.</p>
            </Notification>
            <Card title="Connexion">
                <form>
                    <StyledBody>
                        <div>
                            <FormControl label="Login">
                                <Input
                                    id="input-id"
                                    value={login}
                                    required={true}
                                    onChange={event => setLogin(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Mot de passe">
                                <Input
                                    id="password"
                                    type="password"
                                    required={true}
                                    value={password}
                                    onChange={event => setPassword(event.currentTarget.value)}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl label="Vous êtes">
                                <RadioGroup
                                    value={status}
                                    required={true}
                                    onChange={e => setStatus(e.currentTarget.value)}
                                    name="status"
                                    align={ALIGN.vertical}>
                                    <Radio value="student">Étudiant</Radio>
                                    <Radio value="teacher">Professeur</Radio>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </StyledBody>
                    <StyledAction>
                        <Button disabled={!(login && password)}
                                isLoading={loading}
                                onClick={(e) => handleButtonClick(e)}>Connexion</Button>
                    </StyledAction>
                </form>
            </Card>
        </>
    );
}

export default LoginPage;
