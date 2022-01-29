// MODELS

const professeurs = {
    _embedded: {
        professeurs: {
            numProf: 0,
            nomProf: '',
            prenomProf: '',
            login: '',
            mdp: '',
            email: '',
        }
    }
}

const etudiants = {
    _embedded: {
        numEtudiant: 0,
        nomEtudiant: '',
        prenomEtudiant: '',
        anneeObtention: null,
        login: '',
        mdp: '',
        numClasse: {
            numClasse: 0,
            nomClasse: ''
        },
        enActivite: true
    }
}