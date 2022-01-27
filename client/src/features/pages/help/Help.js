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
                        Si vous voulez rechercher une entreprise, vous devez aller sur la page " Entreprise ", pour cliquer sur
                        le bouton " Rechercher une entreprise ". <br/>Il vous est alors fourni trois critères. Utilisez-les afin de
                        pouvoir trouver les entreprises qui correspondent à vos choix.
                    </Panel>
                    <Panel title="Comment ajouter une entreprise ?">
                        Pour ajouter une entreprise, rendez-vous sur la page " Entreprise ", où vous devez cliquer sur le
                        bouton " Ajouter une entreprise ". Vous devrez ensuite ajouter les informations concernant
                        l’entreprise. <br/>Toutes les informations ne sont pas obligatoires, mais il est conseillé d’en fournir un
                        maximum pour renseigner les futurs stagiaires sur les entreprises référencées.
                    </Panel>
                    <Panel title="Comment afficher ou enlever une information concernant l'entreprise ?">
                        En allant sur la page " Entreprise ", vous pouvez voir les entreprises déjà référencées. Vous pouvez
                        alors remarquer que certaines informations concernant l'entreprise sont absentes. <br/>Vous pouvez
                        cependant les afficher grâce à la liste déroulante : choisissez l'information que vous voulez afficher
                        puis cliquez sur le bouton " Ajouter ". <br/>Si vous voulez enlever une information, il vous suffit de cliquer
                        sur le moins situé à l'entête de la colonne représentant l'information concerné.
                    </Panel>
                    <Panel title="N'y a t-il pas une autre solution pour voir ces informations ?">
                        Bien sûr, vous pouvez cliquer sur l’icône correspondant pour voir toutes les informations concernant
                        l'entreprise que vous avez sélectionné.
                    </Panel>
                    <Panel title="Comment puis-je supprimer une entreprise ?">
                        Rien de plus simple, il vous suffit de cliquer sur l'icône correspondant qui se situe sur la deuxième colonne "
                        Opération ".
                    </Panel>
                    <Panel title="Et si je veux modifier une information fausse ?">
                        Cliquez sur l’icône correspondant, puis changer le(s) information(s) que vous voulez. Vous pourrez par la même
                        occasion renseigner une information manquante si vous en avez la possibilité.
                    </Panel>
                </Accordion>
            </div>
        </>
    );
}

export default Help;
