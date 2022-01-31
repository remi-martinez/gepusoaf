import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "baseui/button";
import EntrepriseForm from "./EntrepriseForm";
import {StyledSpinnerNext} from "baseui/spinner";
import Utils from "../../shared/Utils";
import ApiService from "../../services/ApiService";
import ToasterService from "../../services/ToasterService";
import Exception from "../../services/Exception";

function EntrepriseEdition() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [entreprise, setEntreprise] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.callGet('entreprises/' + id)
            .then((result) => {
                if (result?.error) {
                    ToasterService.error(result.error)
                    setLoading(false);
                    setError(true);
                } else {
                    setEntreprise(result);
                    setLoading(false);
                }
            })
            .catch((error) => {
                Exception.throw(error.toString())
                setLoading(false);
                setError(true);
            })
    }, [id]);

    return (
        <>
            <Button onClick={() => navigate('/entreprises')}>
                Retour
            </Button>
            <h1>Éditer une entreprise</h1>
            {loading ? Utils.loadingSkeletonElements() :
                error ? Utils.errorDiv() :
                <EntrepriseForm data={entreprise}/>
            }
        </>
    );
}

export default EntrepriseEdition;
