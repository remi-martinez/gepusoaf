import * as React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {AppNavBar, setItemActive} from "baseui/app-nav-bar";
import {StatefulTooltip} from "baseui/tooltip";
import Utils from "../../shared/Utils";

function NavigationBar({user}) {

    const navigate = useNavigate();

    const [mainItems, setMainItems] = useState([
        {label: "Accueil", pathname: "/"},
        {label: "Entreprises", pathname: "/entreprises"},
        {label: "Stagiaire", pathname: "/stagiaire"},
        {label: "Inscription", pathname: "/inscription"}
    ]);

    const titleWithTooltip = () => {
        return (
                <StatefulTooltip content={() => (
                    <span>Gestion des Entreprises Proposant Un Stage Ou un Apprentissage Facilement !</span>
                )}>
                    <span style={{cursor: 'pointer'}} onClick={() => {
                        setMainItems(prev => setItemActive(prev, {label: "Accueil"}));
                        navigate('/');

                    }}>☕ GEPUSOAF</span>
                </StatefulTooltip>
        );
    }

    return (
       <>
           {
               user.connected ?
                   (
                           <AppNavBar
                               title={titleWithTooltip()}
                               mainItems={mainItems}
                               onMainItemSelect={item => {
                                   setMainItems(prev => setItemActive(prev, item));
                                   navigate(item.pathname)
                               }}
                               username={Utils.usernameFormat(user)}
                               usernameSubtitle={Utils.userStatusFormat(user)}
                               userItems={[
                                   {label: "Aide", pathname: "/aide"},
                                   {label: "Déconnexion", pathname: "disconnect"}
                               ]}
                               onUserItemSelect={item => {
                                   navigate(item.pathname)
                               }}
                           />
                   ) :
                   (
                       <AppNavBar
                           title={titleWithTooltip()}
                           mainItems={[{label: "Connexion", pathname: "/login"}]}
                           onMainItemSelect={item => {
                               setMainItems(prev => setItemActive(prev, item));
                               navigate(item.pathname)
                           }}
                       />
                   )

           }
       </>
    );
}

export default NavigationBar;
