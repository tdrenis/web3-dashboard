import React from "react";
// Components
import Eth from "../components/Eth";
import HomeSwitch from "../components/HomeSwitch";

const HomePage = () => {
  return (
    <div className="Home" style={{'marginTop': '3rem'}}>
      <HomeSwitch/>
      <Eth/>
    </div>
  );
}

export default HomePage;