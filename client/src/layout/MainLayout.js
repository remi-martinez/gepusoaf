import * as React from "react";
import NavigationBar from "../navigation/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Help from "../help/Help";
import Inscription from "../inscription/Inscription";
import StudentPage from "../student/StudentPage";
import LoginPage from "../login/LoginPage";

function MainLayout() {
    return (
        <>
            <NavigationBar/>
            <div style={{padding: 20}}>
                <Routes>
                    <Route index path="/" element={<Home/>}/>
                    <Route path="entreprise" element={<p>todo : entreprise</p>}/>
                    <Route path="stagiaire" element={<StudentPage/>}/>
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
