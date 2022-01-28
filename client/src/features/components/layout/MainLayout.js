import * as React from "react";
import NavigationBar from "../navigation/NavigationBar";
import {Link, Route, Routes} from "react-router-dom";
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


function MainLayout() {
    const [user, setUser] = useState({connected: false, login: '', firstname: '', lastname: '', status: ''});

    useEffect(() => {
        if (config.forceLogin) {
            setUser({connected: true, login: 'remartinez', firstname: 'Rémi', lastname: 'Martinez', status: 'student'})
        }
    }, []);
    return (
        <>
            <NavigationBar user={user}/>
            <ToasterContainer/>
            <div style={{padding: 20}}>
                {!user.connected ?
                    <Routes>
                        <Route index path="/" element={<LoginPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="*" element={<LoginPage/>}/>
                    </Routes>
                    :
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="entreprises" element={<Entreprises/>}/>
                        <Route path="stagiaire" element={<StudentPage/>}/>
                        <Route path="stagiaire/ajouter" element={<StudentAddPage/>}/>
                        <Route path="inscription" element={<Inscription/>}/>
                        <Route path="aide" element={<Help/>}/>
                        <Route path="disconnect" element={<p>disconnect</p>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                }
            </div>
        </>
    );
}

export default MainLayout;
