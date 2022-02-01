import React from 'react';
import {Card, StyledAction, StyledBody} from 'baseui/card';
import {Button} from 'baseui/button';
import {useNavigate} from "react-router-dom";

function HomeCard() {
    const navigate = useNavigate();

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
                <Button overrides={{BaseButton: {style: {width: '100%'}}}} onClick={() => navigate('/stagiaire')}>
                    Se rendre sur l'espace stagiaire
                </Button>
            </StyledAction>
        </Card>
    );
}

export default HomeCard;
