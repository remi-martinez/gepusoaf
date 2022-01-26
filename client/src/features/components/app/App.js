import React from 'react';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, DarkTheme, LightTheme} from 'baseui';
import MainLayout from "../layout/MainLayout";

const engine = new Styletron();


function App() {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <MainLayout/>
            </BaseProvider>
        </StyletronProvider>
    );
}

export default App;