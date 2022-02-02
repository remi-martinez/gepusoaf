import React from 'react';
import config from '../../config.json'

const apiUrl = config.isLocal ? config.apiUrlLocal : config.apiUrl;

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
        return fetch(`${apiUrl}/${route}`, {
            method: 'GET'
        }).then(data => data.json());
    }

    static callPost(route, body) {
        return fetch(`${apiUrl}/${route}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(data => data.json());
    }

    static callDelete(route) {
        return fetch(`${apiUrl}/${route}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
    }

    static callPut(route, body) {
        return fetch(`${apiUrl}/${route}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        })
    }
}

export default ApiService;
