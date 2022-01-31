import React, {useEffect} from 'react';
import ToasterService from "../../services/ToasterService";
import {useNavigate} from "react-router-dom";
import LoginService from "../../services/LoginService";

function Disconnect(props) {

    const navigate = useNavigate();

    useEffect(() => {
        props.onUserChange({
            connected: false,
            login: '',
            firstname: '',
            lastname: '',
            status: ''
        })
        navigate('/login')
        LoginService.deleteUserCookie()
        ToasterService.success("Déconnecté avec succès")
    }, []);

    return (
        <></>
    );
}

export default Disconnect;
