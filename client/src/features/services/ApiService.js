import React from 'react';
import config from '../../config.json'

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
        return fetch(`${config.apiUrl}/api/${route}`, {
            method: 'GET'
        }).then(data => data.json());
    }

    static callPost(route, body) {
        return fetch(`${config.apiUrl}/api/${route}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                body: JSON.stringify(body)
            }
        }).then(data => data.json());
    }

    static callStudentConnection(body) {

    }

    static callTeacherConnection(body) {

    }


}

export default ApiService;