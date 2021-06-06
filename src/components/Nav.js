import React from "react";
// Styling 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
  return (
    <Navbar bg="light" variant="light" style={{'borderBottom': '5px solid rgb(208,216,254)'}}>
        <Container>
            <Navbar.Brand style={{'color': 'rgb(44, 45, 49)'}}>Web3 Dashboard</Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Nav;