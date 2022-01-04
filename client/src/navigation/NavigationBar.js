import * as React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {AppNavBar, setItemActive} from "baseui/app-nav-bar";
import {StatefulTooltip} from "baseui/tooltip";

function NavigationBar() {

    const navigate = useNavigate();

    const [mainItems, setMainItems] = useState([
        {label: "Accueil", pathname: "/"},
        {label: "Entreprise", pathname: "/entreprise"},
        {label: "Stagiaire", pathname: "/stagiaire"},
        {label: "Inscription", pathname: "/inscription"},
    ]);

    const titleWithTooltip = () => {
        return (
                <StatefulTooltip content={() => (
                    <span>Gestion des Entreprises Proposant Un Stage Ou un Apprentissage Facilement !</span>
                )}>
                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>☕ GEPUSOAF</span>
                </StatefulTooltip>
        );
    }

    return (
        <AppNavBar
            title={titleWithTooltip()}
            mainItems={mainItems}
            onMainItemSelect={item => {
                setMainItems(prev => setItemActive(prev, item));
                navigate(item.pathname)
            }}
            username="Rémi Martinez"
            usernameSubtitle="Étudiant"
            userItems={[
                {label: "Aide", pathname: "/aide"},
                {label: "Déconnexion", pathname: "disconnect"}
            ]}
            onUserItemSelect={item => {
                navigate(item.pathname)
            }}
        />
    );
}

export default NavigationBar;
