import React from 'react';
import HomeCard from "./HomeCard";

const itemProps = {
    backgroundColor: 'mono300',
    height: 'scale500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function Home() {

    return (
        <>
            <h1>Stage BTS</h1>
            <p>Bienvenue sur la page de gestion des stages</p>
            <div align={"center"}>
                <HomeCard/>
            </div>
        </>
    );

}

export default Home;
