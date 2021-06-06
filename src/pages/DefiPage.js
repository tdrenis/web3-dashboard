import React from "react";
// Components
import Defi from "../components/Defi";
import DefiSwitch from "../components/DefiSwitch";
import Footer from "../components/Footer";

const DefiPage = () => {
  return (
    <div className="Defi" style={{'marginTop': '3rem'}}>
        <DefiSwitch/>
        <Defi />
        <Footer/>
    </div>
  );
}

export default DefiPage;