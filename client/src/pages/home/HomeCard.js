import React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';

function HomeCard() {
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
            </StyledAction>
        </Card>
    );
}

export default HomeCard;
