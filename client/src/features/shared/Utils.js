import React from 'react';

class Utils extends React.Component {
    static usernameFormat(user) {
        return `${user.firstname} ${user.lastname}`
    }

    static userStatusFormat(user) {
        switch (user.status) {
            case 'student':
                return 'Étudiant'
            case 'teacher':
                return 'Professeur'
            default:
                return ''
        }
    }

}

export default Utils;
