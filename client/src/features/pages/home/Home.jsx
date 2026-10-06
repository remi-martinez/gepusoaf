import React from 'react';
import HomeCard from "./HomeCard";
import animatedbird from "./animatedbird.module.scss";

const itemProps = {
    backgroundColor: 'mono300',
    height: 'scale500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};


function Home() {

    return (
        <div className="container" style={{textAlign: 'center'}}>


            <div className={`${animatedbird.birdContainer} ${animatedbird.birdContainerOne}`}>
                <div className={`${animatedbird.bird} ${animatedbird.birdOne}`}/>
            </div>
            <div className={`${animatedbird.birdContainer} ${animatedbird.birdContainerTwo}`}>
                <div className={`${animatedbird.bird} ${animatedbird.birdTwo}`}/>
            </div>
            <div className={`${animatedbird.birdContainer} ${animatedbird.birdContainerThree}`}>
                <div className={`${animatedbird.bird} ${animatedbird.birdThree}`}/>
            </div>
            <div className={`${animatedbird.birdContainer} ${animatedbird.birdContainerFour}`}>
                <div className={`${animatedbird.bird} ${animatedbird.birdFour}`}/>
            </div>


            <h1>Stage BTS</h1>
            <p>Bienvenue sur la page de gestion des stages</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <HomeCard title='Espace stagiaire'
                          description='Découvrez un espace stagiaire dédié avec de nombreuses fonctionnalités'
                          icon='freelance.png'
                          btnLabel='Espace stagiaire'
                          btnRoute='/stagiaires'/>
                <HomeCard title='Espace entreprises'
                          description='Consultez dès maintenant la liste des entreprises proposant un stage'
                          icon='office.png'
                          btnLabel='Espace entreprise'
                          btnRoute='/entreprises'/>
            </div>
        </div>
    );

}

export default Home;
