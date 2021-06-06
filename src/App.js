import React from "react";
// Pages
import HomePage from "./pages/HomePage";
import DefiPage from "./pages/DefiPage";
import NFTPage from "./pages/NFTPage";
// Styling
import GlobalStyles from "./components/GlobalStyles";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// Routing 
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{'color': 'rgb(39, 41, 45)'}}>Project</Navbar.Brand>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/defi">
          <DefiPage />
        </Route>
        <Route path="/nfts">
          <NFTPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
