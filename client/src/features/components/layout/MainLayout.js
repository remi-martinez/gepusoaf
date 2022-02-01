import * as React from "react";
import NavigationBar from "../navigation/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Help from "../../pages/help/Help";
import Inscription from "../../pages/inscription/Inscription";
import StudentPage from "../../pages/student/StudentPage";
import LoginPage from "../../pages/login/LoginPage";
import Entreprises from "../../pages/entreprises/Entreprises";
import StudentAddPage from "../../pages/student/StudentAddPage";
import {ToasterContainer} from "baseui/toast";
import {useEffect, useState} from "react";
import PageNotFound from "../../pages/404/PageNotFound";
import config from '../../../config.json'
import Disconnect from "../../pages/login/Disconnect";
import LoginService from "../../services/LoginService";
import EntrepriseDetails from "../../pages/entreprises/EntrepriseDetails";
import EntrepriseCreation from "../../pages/entreprises/EntrepriseCreation";
import EntrepriseEdition from "../../pages/entreprises/EntrepriseEdition";
import StudentDetails from "../../pages/student/StudentDetails";
import StudentEditPage from "../../pages/student/StudentEditPage";

function MainLayout() {
    const [user, setUser] = useState({connected: false, login: '', firstname: '', lastname: '', status: ''});

    useEffect(() => {
        if (config.forceLogin) {
            setUser({connected: true, login: 'remartinez', firstname: 'Rémi', lastname: 'Martinez', status: 'student'})
        } else {
            if(LoginService.userCookieExists()) {
                handleUserChange(LoginService.getUserCookie());
            }
        }
    }, []);

    const handleUserChange = (user) => {
        setUser(user);
    }

    return (
        <>
            <NavigationBar user={user}/>
            <ToasterContainer/>
            <div style={{padding: 20}}>
                {!user.connected ?
                    <Routes>
                        <Route path="*" element={<LoginPage user={user} onUserChange={(user) => handleUserChange(user)} />}/>
                    </Routes>
                    :
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="entreprises" element={<Entreprises/>}/>
                        <Route path="entreprises/:id" element={<EntrepriseDetails/>}/>
                        <Route path="entreprises/:id/edit" element={<EntrepriseEdition/>}/>
                        <Route path="entreprises/new" element={<EntrepriseCreation/>}/>
                        <Route path="stagiaires" element={<StudentPage/>}/>
                        <Route path="stagiaires/:id" element={<StudentDetails/>}/>
                        <Route path="stagiaires/:id/edit" element={<StudentEditPage/>}/>
                        <Route path="stagiaires/new" element={<StudentAddPage/>}/>
                        <Route path="inscription" element={<Inscription/>}/>
                        <Route path="aide" element={<Help/>}/>
                        <Route path="disconnect" element={<Disconnect user={user} onUserChange={(user) => handleUserChange(user)}/>}/>
                        <Route path="login" element={<Home/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                }
            </div>
        </>
    );
}

export default MainLayout;
