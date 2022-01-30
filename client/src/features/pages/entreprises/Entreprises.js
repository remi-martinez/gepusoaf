import React from 'react';
import {Notification} from "baseui/notification";
import EntreprisesList from "../../components/entreprises/EntreprisesList";

function Entreprises() {
    return (
        <>
            <h1>Entreprises</h1>
            <Notification
                overrides={{
                    Body: {style: {width: 'auto'}},
                }}>
                <p>Retrouvez ici toutes les entreprises !</p>
            </Notification>
            <EntreprisesList/>
        </>
    );
}

export default Entreprises;
