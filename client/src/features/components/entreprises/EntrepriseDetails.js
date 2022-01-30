import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Card, StyledBody} from "baseui/card";
import {Cell, Grid} from "baseui/layout-grid";
import style from './entreprise.module.css'

function EntrepriseDetails() {
    const {id} = useParams();

    useEffect(() => {
        // TODO : query pr récup les vraies infos
    }, []);

    return (
        <>
            <Grid className={style.cards}>
                <Cell span={6}>
                    <Card title="Information" className={style.cards}>
                        <StyledBody>
                            <Grid>
                                <Cell span={5}>
                                    <p>Nom de l'entreprise</p>
                                    <p>Nom du contact</p>
                                    <p>Nom du responsable</p>
                                </Cell>
                                <Cell span={7}>
                                    <p>ARS - Agence régionale de la santé</p>
                                    <p>Marie Gibe</p>
                                    <p>Maire Gibe</p>

                                </Cell>
                            </Grid>
                        </StyledBody>
                    </Card>
                    <Card title="Contact" className={style.cards}>
                        <StyledBody>
                            <Grid>
                                <Cell span={5}>
                                    <p>Rue</p>
                                    <p>Code postal</p>
                                    <p>Ville</p>
                                    <p>Téléphone</p>
                                    <p>Fax</p>
                                    <p>Email</p>
                                </Cell>
                                <Cell span={7}>
                                    <p>Route Saint-Joseph</p>
                                    <p>20090</p>
                                    <p>Ajaccio</p>
                                    <p>01 02 03 04 05</p>
                                    <p>01 02 03 04 05</p>
                                    <p>contact@infos.fr</p>
                                </Cell>
                            </Grid>
                        </StyledBody>
                    </Card>
                </Cell>
                <Cell span={6}>
                    <Card title="Divers" className={style.miscCard}>
                        <StyledBody>
                            <Grid>
                                <Cell span={4}>
                                    <p>Observation</p>
                                    <p>URL du site</p>
                                    <p>Niveau</p>
                                    <p>Spécialité</p>
                                </Cell>
                                <Cell span={8}>
                                    <p>Blabla...</p>
                                    <p>https://www.example.com</p>
                                    <p>BAC+1/BAC+2</p>
                                    <p>SISR</p>

                                </Cell>
                            </Grid>
                        </StyledBody>
                    </Card>
                </Cell>
            </Grid>
        </>
    );
}

export default EntrepriseDetails;
