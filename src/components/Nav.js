import React from "react";
// Styling 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand style={{'color': 'rgb(39, 41, 45)'}}>Web3 Dashboard</Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Nav;