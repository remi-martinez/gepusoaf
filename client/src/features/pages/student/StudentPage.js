import React from 'react';
import {FormControl} from "baseui/form-control";
import {Input} from "baseui/input";

const leftCentered = {
    textAlign: 'left'
};

function StudentPage() {

    return (
        <>
            <div style={leftCentered}>
                <h1>Étudiant</h1>
                <p>Informations concernant l'étudiant</p>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <FormControl label="Nom">
                    <Input
                        required={true}
                        id="lastname"
                        value={"Martinez"}
                        onChange={() => {}}
                    />
                </FormControl>
                <FormControl label="Prénom">
                    <Input
                        required={true}
                        id="first name"
                        value={"Rémi"}
                        onChange={() => {}}
                    />
                </FormControl>
                <FormControl label="Nom d'utilisateur">
                    <Input
                        id="username"
                        value={"remi-martinez"}
                        onChange={() => {}}
                    />
                </FormControl>
            </form>
        </>
    );

}

export default StudentPage;
