import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const NFT = ({ name, price, token_symbol, usd_equiv, os_url, img_url }) => {
  return (
    <StyledNFT>
        <a href={os_url}>
            <p className='name'> {name}</p>
            <div className='image-container'>
                <img src={img_url} alt={name} />
            </div>
            <p className='salePrice'>{price} {token_symbol}</p>
            <p>~ ${Math.round(usd_equiv * price * 100)/100}</p>
        </a>
    </StyledNFT>
  );
};

const StyledNFT = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.025);
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: rgb(44, 44, 44);
  .image-container { 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-height: 30vh;
    background-size: cover; 
    background-position: center; 
    object-fit: cover;
    border-radius: 5px;
  }
  p { 
    font-size: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #c0c0c0;
  }
  .name { 
      padding: 10px 0px;
  }
  .salePrice { 
      padding-top: 5px;
  }
`;

export default NFT;