import React from 'react';
import Background from './containers/Background'
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Background>
            <Navbar/>
        </Background>
    );
}

export default App;
