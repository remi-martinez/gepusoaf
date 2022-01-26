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

function MainLayout() {
    return (
        <>
            <NavigationBar/>
            <div style={{padding: 20}}>
                <Routes>
                    <Route index path="/" element={<Home/>}/>
                    <Route path="entreprises" element={<Entreprises/>}/>
                    <Route path="stagiaire" element={<StudentPage/>}/>
                    <Route path="stagiaire/ajouter" element={<StudentAddPage/>}/>
                    <Route path="inscription" element={<Inscription/>}/>
                    <Route path="aide" element={<Help/>}/>
                    <Route path="disconnect" element={<p>disconnect</p>}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default MainLayout;
