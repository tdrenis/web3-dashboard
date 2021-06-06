import React from "react";
// Components
import NFTListings from "../components/NFTListings";
import NFTSwitch from "../components/NFTSwitch";
import Footer from "../components/Footer";

const NFTPage = () => {
  return (
    <div className="NFTs" style={{'marginTop': '3rem'}}>
        <NFTSwitch />
        <NFTListings />
        <Footer/>
    </div>
  );
}

export default NFTPage;