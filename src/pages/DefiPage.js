import React from "react";
// Components
import Defi from "../components/Defi";
import DefiSwitch from "../components/DefiSwitch";

const DefiPage = () => {
  return (
    <div className="Defi" style={{'marginTop': '-3rem'}}>
        <DefiSwitch />
        <Defi />
    </div>
  );
}

export default DefiPage;