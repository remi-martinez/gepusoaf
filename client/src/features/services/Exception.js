import React from 'react';
import ToasterService from "./ToasterService";

class Exception extends React.Component {

    static throw(msg) {
        ToasterService.error(msg.toString())
        throw new Error(msg)
    }
}

export default Exception;