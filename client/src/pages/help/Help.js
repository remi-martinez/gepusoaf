import React from 'react';
import {Accordion, Panel} from "baseui/accordion";

const leftCentered = {
    textAlign: 'left'
};

function Help() {
    return (
        <>
            <div style={leftCentered}>
                <h1>Aide</h1>
                <p>Bienvenue sur la FAQ !</p>
            </div>
            <div style={leftCentered}>
                <h3>Entreprise</h3>
                <Accordion>
                    <Panel title="Comment rechercher une entreprise ?">
                        Si vous voulez rechercher une entreprise, vous devez aller sur la page "Entreprise", pour cliquer sur le lien.<br/>
                        Utilisez-les afin de pouvoir trouver les entreprises qui correspondent à vos choix.
                    </Panel>
                    <Panel title="Comment ajouter une entreprise ?">
                        Pour ajouter une entreprise, rendez-vous sur la page "Entrepris", où vous devez cliquer sur le bouton concernant l'entreprise.<br/>
                        Toutes les informations ne sont pas obligatoires, mais il est conseillé d'en fournir des référencées.
                    </Panel>
                    <Panel title="Comment afficher ou enlever une information concernant l'entreprise ?">
                        En allant sur la page "Entreprise", vous pouvez voir les entreprises déjà référencées.<br/>
                        Vous pouvez alors les afficher grâce à la liste déroulante: choisissez l'information que vous voulez afficher,<br/>
                        il vous suffit de cliquer sur le moins situé à l'entête de la colonne représentant l'information.
                    </Panel>
                    <Panel title="N'y a t-il pas une autre solution pour voir ces informations ?">
                        Bien sûr, vous pouvez cliquer sur l'icône oeil pour voir toutes les informations l'entreprise sélectionnée.
                    </Panel>
                </Accordion>
            </div>
        </>
    );
}

export default Help;
