import React, {useState} from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import ApiService from "../../services/ApiService";
import Exception from "../../services/Exception";
import {Textarea} from "baseui/textarea";
import {StyledSpinnerNext} from "baseui/spinner";
import ToasterService from "../../services/ToasterService";
import {ButtonGroup} from "baseui/button-group";

function HomeCard() {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const apiGetTest = () => {
        setLoading(true);
        ApiService.callGet('professeurs')
            .then(
                (data) => {
                    setItems(data._embedded.professeurs)
                    setLoading(false);
                    ToasterService.success("✔ Requête effectuée !")
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                    Exception.throw(error.toString())
                }
            )
            .catch((e) => {
                setLoading(false);
                setError(error);
            })
    }

    const apiPostTest = () => {
        setLoading(true);
        ApiService.callPost('professeurs', {
            "nomProf": "White",
            "prenomProf": "Walter",
            "login": "wwhite",
            "mdp": "wwhite",
            "email": "white@gmail.com",
        })
            .then(
                (data) => {
                    console.log(data)
                    setLoading(false);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                    Exception.throw(error.toString())
                }
            )
            .catch((e) => {
                setLoading(false);
                setError(error);
                ToasterService.error(e.toString())
                Exception.throw(error.toString())
            })
    }

    return (
        <Card
            overrides={{Root: {style: {width: '328px'}}}}
            headerImage={
                'freelance.png'
            }
            title="Espace stagiaire"
        >
            <StyledBody>
                Découvrez un espace stagiaire dédié avec de nombreuses fonctionnalités.
            </StyledBody>
            <StyledAction>
                <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                    Se rendre sur l'espace stagiaire
                </Button>
                <hr/>
                <div className="test-zone-delete-me-later">
                    <ButtonGroup>
                        <Button onClick={() => apiGetTest()}>
                            GET Test !
                        </Button>
                        <Button onClick={() => apiPostTest()}>
                            POST Test ! (création)
                        </Button>
                    </ButtonGroup>
                    <hr/>
                    Résultat :
                    { loading ? <StyledSpinnerNext/> : <Textarea value={items ? items.map((p) => { return (p.nomProf + ' ' + p.prenomProf + '\n')}): 'Aucune donnée.'}/> }
                </div>
            </StyledAction>
        </Card>
    );
}

export default HomeCard;
