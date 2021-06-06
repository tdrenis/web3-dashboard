import React from "react";
import HomePage from "./pages/HomePage";
// Styling
import GlobalStyles from "./components/GlobalStyles";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{'color': 'rgb(39, 41, 45)'}}>Project</Navbar.Brand>
        </Container>
      </Navbar>
      <HomePage />
    </div>
  );
}

export default App;
