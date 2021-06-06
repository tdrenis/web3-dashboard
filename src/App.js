import React from "react";
import Home from "./pages/Home";
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
          <Navbar.Brand>Web3 Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
