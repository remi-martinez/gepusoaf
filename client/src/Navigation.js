import * as React from "react";
import {useState} from "react";
import {AppNavBar, setItemActive} from "baseui/app-nav-bar";

function Navigation() {
    const [mainItems, setMainItems] = useState([
        {label: "Accueil"},
        {label: "Entreprise"},
        {label: "Stagiaire"},
        {label: "Inscription"},
    ]);
    return (
        <AppNavBar
            title="GEPUSOAF"
            mainItems={mainItems}
            onMainItemSelect={item => {
                setMainItems(prev => setItemActive(prev, item));
            }}
            username="Rémi Martinez"
            usernameSubtitle="Étudiant"
            userItems={[
                {label: "Aide"},
                {label: "Déconnexion"}
            ]}
            onUserItemSelect={item => console.log(item)}
        />
    );
}

export default Navigation;