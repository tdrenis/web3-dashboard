import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Images 
import git from "../img/git-logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/tdrenis/web3-dashboard">
          <div>
            <img src={git} alt=""/> 
            <p>GitHub</p>
          </div>
      </a>
      <h7>Built by Tommy Drenis</h7>
    </FooterContainer>
  );
};

const FooterContainer = styled(motion.div)`
    margin: 4rem 0rem 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a { 
        div { 
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img { 
            margin-bottom: 1rem;
            margin-right: 0.25rem;
            width: 20px;
            height: 20px;
        }
    }
`

export default Footer;