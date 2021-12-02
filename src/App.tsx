import React from 'react';
import Background from './containers/Background'
import Navbar from "./components/Navbar";
import Container from "./containers/Container";


const App = () => {
    return (
        <Background>
            <Navbar/>
            <Container>
                <p>test</p>
            </Container>
        </Background>
    );
}

export default App;
