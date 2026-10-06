import React from 'react';
import {Cell, Grid} from "baseui/layout-grid";
import style from "../pages/entreprises/entreprise.module.css";
import {Card, StyledBody} from "baseui/card";
import {Skeleton} from "baseui/skeleton";
import {Link} from "react-router-dom";

class Utils extends React.Component {
    static skeleton(rows) {
        return (
            <Skeleton
                rows={rows}
                width="100%"
                animation
                overrides={{
                    Row: {
                        style: {
                            height: '20px',
                            marginBottom: '15px',
                        },
                    },
                }}
            />
        );
    }

    static loadingSkeletonElements() {
        return (
            <Grid className={style.cards}>
                <Cell span={6}>
                    <Card title="Informations" className={style.cards}>
                        <StyledBody>
                            {Utils.skeleton(3)}
                        </StyledBody>
                    </Card>
                    <Card title="Contact" className={style.cards}>
                        <StyledBody>
                            {Utils.skeleton(6)}
                        </StyledBody>
                    </Card>
                </Cell>
                <Cell span={6}>
                    <Card title="Divers" className={style.cards}>
                        <StyledBody>
                            {Utils.skeleton(4)}
                        </StyledBody>
                    </Card>
                </Cell>
            </Grid>
        );
    }

    static skeletonElementsEtudiant() {
        return (
            <Card title="Informations" className={style.cards}>
                <StyledBody>
                    {Utils.skeleton(5)}
                </StyledBody>
            </Card>
        );
    }

    static errorDiv(link) {
        return (
            <div className={style.errorDiv}>
                <h3>Une erreur est survenue</h3>
                <p>Veuillez réessayer plus tard. <Link to={link}>Retour</Link></p>
            </div>
        );
    }

    static usernameFormat(user) {
        return `${user.firstname} ${user.lastname}`
    }

    static userStatusFormat(user) {
        switch (user.status) {
            case 'student':
                return 'Étudiant'
            case 'teacher':
                return 'Professeur'
            default:
                return ''
        }
    }

}

export default Utils;
