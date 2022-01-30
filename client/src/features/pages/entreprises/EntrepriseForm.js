import React, {useEffect, useState} from 'react';
import {Cell, Grid} from "baseui/layout-grid";
import {Card, StyledBody} from "baseui/card";
import style from "./entreprise.module.css";
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Textarea} from "baseui/textarea";
import {Button, SIZE} from "baseui/button";
import {COUNTRIES, PhoneInput} from "baseui/phone-input";

function EntrepriseForm(props) {
    const [dataIn, setDataIn] = useState(null);

    useEffect(() => {
        if (props.data) {
            setDataIn(props.data);
        }
    }, [])

    const noData = () => {
        return <span style={{color: 'lightgray'}}>Aucune donnée</span>
    }

    const display = (data) => {
        return (dataIn && data) ? data : '';
    }

    return (
        <>
            <form>
                <Grid>
                    <Cell span={6}>
                        <Card title="Informations" className={style.cards}>
                            <StyledBody>
                                <FormControl label="Nom de l'entreprise">
                                    <Input id="raisonSociale-input" placeholder="Raison sociale"
                                           value={display(dataIn?.raisonSociale)}
                                           onChange={(e) => setDataIn({...dataIn, raisonSociale: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Nom du contact">
                                    <Input id="contact-input"
                                           value={display(dataIn?.nomContact)}
                                           onChange={(e) => setDataIn({...dataIn, nomContact: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Nom du responsable">
                                    <Input id="responsable-input"
                                           value={display(dataIn?.nomResp)}
                                           onChange={(e) => setDataIn({...dataIn, nomResp: e.currentTarget.value})}/>
                                </FormControl>
                            </StyledBody>
                        </Card>
                        <Card title="Contact" className={style.cards}>
                            <StyledBody>
                                <FormControl label="Rue">
                                    <Input id="rue-input" placeholder="11 Rue de la Paix"
                                           value={display(dataIn?.rueEntreprise)}
                                           onChange={(e) => setDataIn({...dataIn, rueEntreprise: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Code postal">
                                    <Input id="cp-input"
                                           value={display(dataIn?.cpEntreprise)}
                                           onChange={(e) => setDataIn({...dataIn, cpEntreprise: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Ville">
                                    <Input id="ville-input"
                                           value={display(dataIn?.villeEntreprise)}
                                           onChange={(e) => setDataIn({...dataIn, villeEntreprise: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Téléphone">
                                    <PhoneInput id="telephone-input"
                                                country={COUNTRIES.FR}
                                                value={display(dataIn?.telEntreprise)}
                                                onChange={(e) => setDataIn({...dataIn, telEntreprise: e.currentTarget.value})}/>
                                </FormControl>
                                <FormControl label="Fax">
                                    <Input id="fax-input"
                                           value={display(dataIn?.faxEntreprise)}/>
                                </FormControl>
                                <FormControl label="Email">
                                    <Input id="email-input"
                                           type="mail"
                                           value={display(dataIn?.email)}/>
                                </FormControl>
                            </StyledBody>
                        </Card>
                    </Cell>
                    <Cell span={6}>

                        <Card title="Divers" className={style.cards}>
                            <StyledBody>
                                <FormControl label="Observation">
                                    <Textarea
                                        id="observation-input"
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
                                    />
                                </FormControl>
                                <FormControl label="URL du site">
                                    <Input id="url-input"/>
                                </FormControl>
                                <FormControl label="Niveau">
                                    <Input id="niveau-input"/>
                                </FormControl>
                            </StyledBody>
                        </Card>
                        <Card title="Spécialité" className={style.cards}>
                            <StyledBody>
                                <FormControl label="Spécialité">
                                    <Input id="specialite-input"/>
                                </FormControl>
                            </StyledBody>
                        </Card>
                        <Button className={style.saveBtn} size={SIZE.large}>
                            Enregistrer
                        </Button>
                    </Cell>
                </Grid>
            </form>
        </>
    );
}

export default EntrepriseForm;
