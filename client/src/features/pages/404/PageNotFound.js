import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <img src="404.gif" width={300}/>
                <h1>- 404 -</h1>
                <h3>Cette page n'existe pas</h3>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        </>
    );
}

export default PageNotFound;
