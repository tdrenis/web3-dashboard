import React from "react";
// Components
import Eth from "../components/Eth";
import Defi from "../components/Defi";
import NFTListings from "../components/NFTListings";
import HomeSwitch from "../components/HomeSwitch";

const HomePage = () => {
  return (
    <div className="Home" style={{'marginTop': '-3rem'}}>
      <HomeSwitch />
      <Eth />
      <Defi />
      <NFTListings />
    </div>
  );
}

export default HomePage;