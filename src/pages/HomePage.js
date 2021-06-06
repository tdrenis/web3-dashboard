import React from "react";
// Components
import Eth from "../components/Eth";
import HomeSwitch from "../components/HomeSwitch";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="Home" style={{'marginTop': '3rem'}}>
      <HomeSwitch/>
      <Eth/>
      <Footer/>
    </div>
  );
}

export default HomePage;