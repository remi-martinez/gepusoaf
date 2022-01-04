import React, {useState} from 'react';
import {Notification} from "baseui/notification";
import EntreprisesList from "../../components/entreprises/EntreprisesList";
import {Spinner} from "baseui/spinner";

function Entreprises() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 200);
    return(
        <>
            <h1>Entreprises</h1>
            <Notification
                overrides={{
                    Body: {style: {width: 'auto'}},
                }}>
                <p>Retrouvez ici toutes les entreprises !</p>
            </Notification>
            { loading ? <Spinner/> : <EntreprisesList/>}
        </>
    );
}

export default Entreprises;
