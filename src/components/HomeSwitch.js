import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeSwitch = () => {
  return (
    <SwitchContainer>
      <Switch>
          <p className='first'>Home</p>
          <p className='second'>NFTs</p>
          <p className='third'>DeFi</p>
      </Switch>
    </SwitchContainer>
  );
};

const SwitchContainer = styled(motion.div)`
  display: block;
  align-items: center;
  justify-content: center;
  background: rgb(208,216,254);
  width: fit-content;
  margin: 0 auto;
  border-radius: 30px;
  padding: 4px 0px;
`

const Switch = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  p { 
    margin: 0.05rem 0.5rem;
    font-size: 18px;
    padding: 2px 12px;
  }
  .first { 
    background: white;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
  }
`

export default HomeSwitch;