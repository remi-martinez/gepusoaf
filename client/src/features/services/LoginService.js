import React from 'react';

class LoginService extends React.Component {
    checkCredentials(user, password) {
        // TODO : requête pour check if login mdp ok
    }

    static login(user, password, status) {
        if (this.checkCredentials(user, password)) {
            // TODO : requête sur /api/professeurs/search?login=... ou /api/etudiants/search?login=... pour chopper toutes les infos
            // puis : setUser = ...
            return true;
        }
        return false;
    }
}

export default LoginService;
