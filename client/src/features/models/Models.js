// MODELS

const professeurs = {
    professeurs: {
        numProf: 0,
        nomProf: '',
        prenomProf: '',
        login: '',
        mdp: '',
        email: '',
    }
}

const classe = {
    numClasse: {
        numClasse: 0,
        nomClasse: ''
    }
}

const etudiants = {
    etudiants: {
        numEtudiant: 0,
        nomEtudiant: '',
        prenomEtudiant: '',
        anneeObtention: null,
        login: '',
        mdp: '',
        classe,
        enActivite: true
    }
}

const entreprises = {
    entreprises: {
        numEntreprise: 0,
        raisonSociale: '',
        nomContact: '',
        nomResp: '',
        rueEntreprise: '',
        cpEntreprise: 0,
        villeEntreprise: '',
        telEntreprise: '',
        faxEntreprise: '',
        email: '',
        observation: '',
        siteEntreprise: '',
        niveau: '',
        enActivite: true,
        specialites: [{
            numSpec: 0,
            libelle: '',
        }]
    }
}



const stages = {
    stages: {
        numStage: 0,
        debutStage: '',
        finStage: '',
        typeStage: '',
        descProjet: '',
        observationStage: '',
        numProf: {
            professeurs
        },
        numEntreprise: {
            entreprises
        }
    }
}
