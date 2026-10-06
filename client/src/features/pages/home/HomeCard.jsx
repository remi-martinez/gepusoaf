import React from 'react';
import {Card, StyledAction, StyledBody} from 'baseui/card';
import {Button} from 'baseui/button';
import {useNavigate} from "react-router-dom";

function HomeCard(props) {
    const navigate = useNavigate();

    return (
        <Card
            overrides={{Root: {style: {width: '328px', margin: '10px'}}}}
            headerImage={props?.icon}
            title={props?.title}
        >
            <StyledBody>
                {props?.description}
            </StyledBody>
            <StyledAction>
                <Button overrides={{BaseButton: {style: {width: '100%'}}}} onClick={() => navigate(props?.btnRoute)}>
                    {props?.btnLabel}
                </Button>
            </StyledAction>
        </Card>
    );
}

export default HomeCard;
