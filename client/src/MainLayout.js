import * as React from "react";
import Navigation from "./navigation/Navigation";
import Help from "./help/Help";

const centered = {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
};

function MainLayout() {
    return (
        <>
            <Navigation/>
            <div style={centered}>
                {/*<Home/>*/}
                <Help/>
            </div>
        </>
    );
}

export default MainLayout;