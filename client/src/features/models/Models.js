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
        etudiants: {
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
}

const entreprises = {
    _embedded: {
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
            enActivite: true
        }
    }
}
