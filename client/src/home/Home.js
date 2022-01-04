import React from 'react';
import HomeCard from "./HomeCard";
import {Link} from "react-router-dom";

const itemProps = {
    backgroundColor: 'mono300',
    height: 'scale500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function Home() {

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Stage BTS</h1>
            <p>Bienvenue sur la page de gestion des stages</p>
            <div align={"center"}>
                <HomeCard/>
            </div>
        </div>
    );

}

export default Home;
