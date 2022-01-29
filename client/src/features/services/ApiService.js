import React from 'react';
import config from '../../config.json'

const apiUrl = config.isLocal ? config.apiUrlLocal : config.apiUrl;
console.log(apiUrl)

class ApiService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    static callGet(route) {
        return fetch(`${apiUrl}/api/${route}`, {
            method: 'GET'
        }).then(data => data.json());
    }

    static callPost(route, body) {
        return fetch(`${apiUrl}/api/${route}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        }).then(data => data.json());
    }

    static callStudentConnection(body) {

    }

    static callTeacherConnection(body) {

    }


}

export default ApiService;