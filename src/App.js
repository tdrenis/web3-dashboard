import React from "react";
// Pages
import HomePage from "./pages/HomePage";
import DefiPage from "./pages/DefiPage";
import NFTPage from "./pages/NFTPage";
// Components 
import Nav from "./components/Nav";
// Styling
import GlobalStyles from "./components/GlobalStyles";
// Routing 
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
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
