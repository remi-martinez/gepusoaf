import React from 'react';
import ApiService from "./ApiService";
import Exception from "./Exception";
import Cookies from "js-cookie";

class LoginService extends React.Component {
    static setUserCookie(user) {
        Cookies.set('user', JSON.stringify(user), { expires: 7 });
    }

    static deleteUserCookie() {
        Cookies.remove('user');
    }

    static getUserCookie() {
        return JSON.parse(Cookies.get('user'));
    }

    static userCookieExists() {
        return Cookies.get('user') !== undefined;
    }

    static getUserRolesCookie(){
        return LoginService.getUserCookie().status
    }

    static isTeacher(){
        return LoginService.getUserCookie().status === "teacher" ? true : false
    }

    static statusToString(status) {
        if(status === 'teacher')
            return 'professeurs'
        return 'etudiants'
    }

    static checkCredentials(login, password, status) {
        return ApiService.callPost(LoginService.statusToString(status) + '/connexion', {
            "login": login,
            "mdp": password
        })
    }


    static login(login, password, status) {
        return new Promise((resolve, reject) => {
            LoginService.checkCredentials(login, password, status)
                .then((data) => {
                    if(data) {
                        return resolve(ApiService.callGet(LoginService.statusToString(status) + '/search?login=' + login));
                    } else {
                        return reject(Exception.throw('Identifiants incorrects'));
                    }
                });
        });
    }

    render() {
        return <></>;
    }
}

export default LoginService;
