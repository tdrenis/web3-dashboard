import React from "react";
// Components
import NFTListings from "../components/NFTListings";
import NFTSwitch from "../components/NFTSwitch";

const NFTPage = () => {
  return (
    <div className="NFTs" style={{'marginTop': '3rem'}}>
        <NFTSwitch />
        <NFTListings />
    </div>
  );
}

export default NFTPage;