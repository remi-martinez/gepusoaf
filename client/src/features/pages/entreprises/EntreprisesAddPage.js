import React from 'react';
import {Input} from "baseui/input";
import {FlexGrid, FlexGridItem} from "baseui/flex-grid";
import {Select} from "baseui/select";
import {Button} from "baseui/button";
import {PhoneInput} from "baseui/phone-input"; // add this package to your repo with `$ yarn add email-validator`


function EntreprisesAddPage() {
    const [valueNomEntreprise, setValueNomEntreprise] = React.useState("");
    const [valueNomContact, setValueNomContact] = React.useState("");
    const [valueNomResponsable, setValueNomResponsable] = React.useState("");
    const [valueRue, setValueRue] = React.useState("");
    const [valueCodePostal, setValueCodePostal] = React.useState("");
    const [valueVille, setValueVille] = React.useState("");
    const [valueTelephone, setValueTelephone] = React.useState("");
    const [valueFax, setValueFax] = React.useState("");
    const [valueEmail, setValueEmail] = React.useState("");
    const [valueObservation, setValueObservation] = React.useState("");
    const [valueUrlSite, setValueUrlSite] = React.useState("");
    const [valueNiveau, setValueNiveau] = React.useState("");
    const [valueSpecialite, setValueSpecialite] = React.useState("");
    const itemProps = {
        backgroundColor: 'mono300',
        height: 'scale1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                {/*Informations*/}
                <h3>Informations</h3>
                <FlexGrid
                    flexGridColumnCount={3}
                    flexGridColumnGap="scale800"
                    flexGridRowGap="scale800"
                >
                    <FlexGridItem>
                        <label htmlFor="nomEntreprise">Nom de l'entreprise *</label>
                        <Input
                            {...itemProps}
                            name="nomEntreprise"
                            value={valueNomEntreprise}
                            onChange={e => setValueNomEntreprise(e.target.value)}
                            type="text"
                            placeholder="ARS"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="nomContact">Nom du contact *</label>
                        <Input
                            {...itemProps}
                            name="nomContact"
                            value={valueNomContact}
                            onChange={e => setValueNomContact(e.target.value)}
                            type="text"
                            placeholder="Marie Gibe"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="nomResponsable">Nom du responsable 📍</label>
                        <Input
                            {...itemProps}
                            name="nomResponsable"
                            value={valueNomResponsable}
                            onChange={e => setValueNomResponsable(e.target.value)}
                            type="text"
                            placeholder="Jean Dupont"
                            clearOnEscape
                        />
                    </FlexGridItem>
                </FlexGrid>
                {/*Contact*/}
                <h3>Contact</h3>
                <FlexGrid
                    flexGridColumnCount={3}
                    flexGridColumnGap="scale800"
                    flexGridRowGap="scale800"
                >
                    <FlexGridItem >
                        <label htmlFor="rue">Rue *</label>
                        <Input
                            {...itemProps}
                            name="rue"
                            value={valueRue}
                            onChange={e => setValueRue(e.target.value)}
                            type="text"
                            placeholder="rue de la république"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="codePostal">Code postal</label>
                        <Input
                            {...itemProps}
                            name="codePostal"
                            value={valueCodePostal}
                            onChange={e => setValueCodePostal(e.target.value)}
                            type="number"
                            placeholder="73000"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="ville">Ville</label>
                        <Input
                            {...itemProps}
                            name="ville"
                            value={valueVille}
                            onChange={e => setValueVille(e.target.value)}
                            clearOnEscape
                            required
                        />
                    </FlexGridItem>
                    <FlexGridItem >
                        <label htmlFor="telephone">Téléphone</label>
                        <Input
                            {...itemProps}
                            name="telephone"
                            value={valueTelephone}
                            onChange={e => setValueTelephone(e.target.value)}
                            placeholder="01 23 45 67 89"
                            type="phone"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="fax">Fax</label>
                        <Input
                            {...itemProps}
                            name="fax"
                            value={valueFax}
                            onChange={e => setValueFax(e.target.value)}
                            placeholder="01 23 45 67 89"
                            clearOnEscape
                            type="phone"
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="email">Email</label>
                        <Input
                            {...itemProps}
                            name="email"
                            value={valueEmail}
                            onChange={e => setValueEmail(e.target.value)}
                            clearOnEscape
                            type="email"
                        />
                    </FlexGridItem>
                </FlexGrid>
                {/*Divers*/}
                <h3>Divers</h3>
                <FlexGrid
                    flexGridColumnCount={4}
                    flexGridColumnGap="scale800"
                    flexGridRowGap="scale800"
                >
                    <FlexGridItem>
                        <label htmlFor="observation">Observation</label>
                        <Input
                            {...itemProps}
                            name="observation"
                            value={valueObservation}
                            onChange={e => setValueObservation(e.target.value)}
                            type="text"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="urlSite">Url de site</label>
                        <Input
                            {...itemProps}
                            name="urlSite"
                            value={valueUrlSite}
                            onChange={e => setValueUrlSite(e.target.value)}
                            type="text"
                            placeholder="https://www.site.com"
                            clearOnEscape
                        />
                    </FlexGridItem>
                    <FlexGridItem>
                        <label htmlFor="niveau">Niveau *</label>
                        <Input
                            {...itemProps}
                            name="niveau"
                            value={valueNiveau}
                            onChange={e => setValueNiveau(e.target.value)}
                            type="text"
                            placeholder="Bac+1/Bac+2"
                            clearOnEscape
                        />
                    </FlexGridItem>
                <FlexGridItem>
                    <label htmlFor="specialite">Specialité</label>
                    <Select
                        {...itemProps}
                        name="specialite"
                        value={valueSpecialite}
                        onChange={e => setValueSpecialite(e.target.value)}
                        type="text"
                        clearOnEscape
                    />
                </FlexGridItem>
                </FlexGrid>
            </form>
            <Button style={{float: "right", marginRight: "10"}} type="submit">Ajouter</Button>
        </>
    );

}

export default EntreprisesAddPage;
