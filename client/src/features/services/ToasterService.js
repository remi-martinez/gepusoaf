import React from 'react';
import {toaster} from "baseui/toast";

class ToasterService extends React.Component {

    static error(msg, closeDelay) {
        if (!closeDelay) closeDelay = 3000;
        if (!msg) msg = 'Une erreur est survenue'
        return toaster.negative(
            <>
                <strong>Erreur</strong><br/>
                {msg}
            </>,
            {
                autoHideDuration: closeDelay
            }
        )
    }

    static info(msg, closeDelay) {
        if (!closeDelay) closeDelay = 3000;
        if (!msg) return;
        return toaster.positive(
            <>
                <strong>Information</strong><br/>
                {msg}
            </>,
            {
                autoHideDuration: closeDelay
            }
        )
    }

    static success(msg, closeDelay) {
        if (!closeDelay) closeDelay = 3000;
        if (!msg) return;
        return toaster.positive(
            <>
                {msg}
            </>,
            {
                autoHideDuration: closeDelay
            }
        )
    }
}

export default ToasterService;
