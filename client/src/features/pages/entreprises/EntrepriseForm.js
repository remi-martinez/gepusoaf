import React, {useEffect, useState} from 'react';
import {Cell, Grid} from "baseui/layout-grid";
import {Card, StyledBody} from "baseui/card";
import style from "./entreprise.module.css";
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";
import {Textarea} from "baseui/textarea";
import {Button, SIZE} from "baseui/button";
import {Select} from "baseui/select";
import ApiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import {StyledSpinnerNext} from "baseui/spinner";

function EntrepriseForm(props) {
    const [dataIn, setDataIn] = useState(null);
    const [loadingSpecs, setLoadingSpecs] = useState(true);
    const [availableSpecs, setAvailableSpecs] = useState([]);
    const formType = props?.formType;

    useEffect(() => {
        setLoadingSpecs(true);
        ApiService.callGet('specialites')
            .then(result => {
                let specs = [];
                result._embedded.specialites.map(s => {
                    specs.push({id: s.numSpec, libelle: s.libelle});
                })
                setAvailableSpecs(specs);
                setLoadingSpecs(false);
            })
            .catch(e => Exception.throw(e.toString()))
        if (formType === 'edition' && props.data) {
            setDataIn(props.data);
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataOut = dataIn;
        const body = {
            "raisonSociale": dataOut?.raisonSociale,
            "nomContact": dataOut?.nomContact,
            "nomResp": dataOut?.nomResp,
            "rueEntreprise": dataOut?.rueEntreprise,
            "cpEntreprise": dataOut?.cpEntreprise,
            "villeEntreprise": dataOut?.villeEntreprise,
            "telEntreprise": dataOut?.telEntreprise,
            "faxEntreprise": dataOut?.faxEntreprise,
            "email": dataOut?.email,
            "observation": dataOut?.observation,
            "siteEntreprise": dataOut?.siteEntreprise,
            "niveau": dataOut?.niveau,
            "enActivite": true,
            "specialites": [dataOut?.specialites.map(s => { return 'specialites/' + s.numSpec })]
        }
        console.log(body);

        if (formType === 'edition') {
            // TODO : édition
        }
        if (formType === 'creation') {
            // ApiService.callPost('entreprises', body).then(result => {
            //     console.log(result);
            // });
        }

    }

    const display = (data) => {
        return (dataIn && data) ? data : '';
    }

    const handleMultiSelectChange = (e) => {
        if (!e?.option) {
            return setDataIn({...dataIn, specialites: []});
        }
        return setDataIn({...dataIn, specialites: e.value})
    }

    const formIsValid = () => {
        let valid = true;
        const requiredFields = [
            dataIn?.raisonSociale,
            dataIn?.rueEntreprise,
            dataIn?.cpEntreprise,
            dataIn?.villeEntreprise,
            dataIn?.telEntreprise,
            dataIn?.niveau
        ]

        requiredFields.forEach((f) => {
            if (f === null || f === '') {
                valid = false;
            }
        })
        return valid;
    }

    return (
        <>
            <form>
                <Grid>
                    <Cell span={6}>
                        <Card title="Informations" className={style.cards}>
                            <StyledBody>
                                <FormControl label="Nom de l'entreprise *">
                                    <Input id="raisonSociale-input" placeholder="Raison sociale" required
                                           value={display(dataIn?.raisonSociale)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               raisonSociale: e.currentTarget.value
                                           })}/>
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
                                <FormControl label="Rue *">
                                    <Input id="rue-input" placeholder="11 Rue de la Paix" required
                                           value={display(dataIn?.rueEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               rueEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Code postal *">
                                    <Input id="cp-input" required
                                           value={display(dataIn?.cpEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               cpEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Ville *">
                                    <Input id="ville-input" required
                                           value={display(dataIn?.villeEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               villeEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Téléphone *">
                                    <Input id="telephone-input" required
                                           value={display(dataIn?.telEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               telEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Fax">
                                    <Input id="fax-input"
                                           value={display(dataIn?.faxEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               faxEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Email">
                                    <Input id="email-input"
                                           type="mail"
                                           value={display(dataIn?.email)}
                                           onChange={(e) => setDataIn({...dataIn, email: e.currentTarget.value})}/>
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
                                        value={display(dataIn?.observation)}
                                        onChange={(e) => setDataIn({...dataIn, observation: e.currentTarget.value})}
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
                                    <Input id="url-input"
                                           value={display(dataIn?.siteEntreprise)}
                                           onChange={(e) => setDataIn({
                                               ...dataIn,
                                               siteEntreprise: e.currentTarget.value
                                           })}/>
                                </FormControl>
                                <FormControl label="Niveau *">
                                    <Input id="niveau-input" required
                                           value={display(dataIn?.niveau)}
                                           onChange={(e) => setDataIn({...dataIn, niveau: e.currentTarget.value})}/>
                                </FormControl>
                            </StyledBody>
                        </Card>
                        <Card title="Spécialité" className={style.cards}>
                            <StyledBody>
                                <FormControl>
                                    {loadingSpecs ? <StyledSpinnerNext/> :
                                        <Select
                                            options={availableSpecs ? availableSpecs : []}
                                            valueKey="id"
                                            labelKey="libelle"
                                            placeholder="Choose a color"
                                            maxDropdownHeight="300px"
                                            multi
                                            onChange={e => handleMultiSelectChange(e)}
                                            value={dataIn?.specialites}
                                        />
                                    }
                                </FormControl>
                            </StyledBody>
                        </Card>
                        <Button disabled={!formIsValid()} className={style.saveBtn} size={SIZE.large} onClick={(e) => handleSubmit(e)}>
                            Enregistrer
                        </Button>
                    </Cell>
                </Grid>
            </form>
        </>
    );
}

export default EntrepriseForm;
