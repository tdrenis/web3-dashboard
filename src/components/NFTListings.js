import React, { useEffect } from "react";
// Components
import NFT from "../components/NFT";
// Images
import os from "../img/os-logo.png";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadListings } from "../actions/listingsAction";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const NFTListings = () => {
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListings());
  }, [dispatch]);

  const { listings } = useSelector(
    (state) => state.listings
  );

  return (
    <div className="NFTs" style={{'marginTop': '1rem'}}>
      <SubBar>
        <h3>Recent NFT sales on &nbsp;</h3>
        <img src={os} alt="OpenSea"/>
      </SubBar>
      <NFTList>
        <NFTs>
            {listings.map( (listing, idx) => (
                <div key={idx}>
                    <NFT
                        name={listing.asset ? (listing.asset.name ? listing.asset.name : listing.asset.collection.name + " " + listing.asset.token_id ) : ''}
                        price={listing.total_price/10**listing.payment_token.decimals}
                        token_symbol={listing.payment_token.symbol}
                        usd_equiv={listing.payment_token.usd_price}
                        os_url={listing.asset ? listing.asset.permalink : 'https://opensea.io/'}
                        img_url={listing.asset ? listing.asset.image_url : ''}
                    />
                </div>
            ))}
        </NFTs>
      </NFTList>
    </div>
  );
}

const SubBar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img { 
      height: 2.5rem;
  }
  h3 { 
      font-weight: lighter;
      margin-top: 7px;
  }
`;

const NFTList = styled(motion.div)`
  padding: 2rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const NFTs = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  align-items: center;
`;

export default NFTListings;