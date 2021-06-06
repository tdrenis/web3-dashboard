import React, { useEffect, useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadEth, searchEth } from "../actions/ethAction";
// Images 
import eth from "../img/eth-logo.png";

const Eth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadEth());
    }, [dispatch]);

    const { supply, usd_price, btc_price, slowGas, normalGas, fastGas, balance } = useSelector(
        (state) => state.eth
    );

    const cFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(searchEth(textInput));
        setTextInput("");
    };

    const formatter = new Intl.NumberFormat('en-US', {});

    return (
        <div style={{'marginTop': '1rem'}}>
            <SubBar>
                <img src={eth} alt=""/>
                <h3>Ethereum Snapshot</h3>
            </SubBar>
            <OuterDiv>
                <SearchBar>
                    <h5>Read the Ether balance of any Ethereum address</h5>
                    <h7>View Vitalik Buterin's balance as an example at</h7>
                    <h6>0xd8da6bf26964af9d7eed9e03e53415d37aa96045</h6>
                    <form className="search">
                    <input value={textInput} onChange={inputHandler} type="text" />
                    <button onClick={submitSearch} type="submit">
                        Search
                    </button>
                    </form>
                { balance && !isNaN(balance) &&
                    <div style={{'marginTop': '30px'}}>
                    <h3>Balance = {Math.round(balance/1000000000000000000 * 100)/100} Ether</h3>
                    <h3 style={{'marginTop': '-45px'}}>~ {cFormatter.format(Math.round(balance/1000000000000000000 * usd_price * 100)/100)}</h3>
                    </div>
                }
                { isNaN(balance) &&
                    <h6 style={{'marginTop': '10px', 'color': 'red'}}>Invalid account address</h6>
                }
                </SearchBar>
                <EthDiv>
                <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                    <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'column', 'marginRight': '5vw', 'background': 'rgb(39, 41, 45)', 'padding': '8px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
                        <p>Supply</p>
                        <p> {formatter.format(supply/1000000000000000000)}</p>
                    </div>
                    <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'background': 'rgb(39, 41, 45)', 'padding': '4px 8px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
                        <p style={{'marginTop': '7px'}}>Price (USD): {cFormatter.format(usd_price)} </p>
                        <p>Price (BTC): {formatter.format(btc_price)} BTC</p>
                    </div>
                </div>
                </EthDiv>
                <EthDiv style={{'flexDirection': 'column'}}>
                <div style={{'marginBottom': '5px'}}>
                    <p>Gas (in Gwei):</p>
                </div>
                <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                    <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 2vw', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '0px 32px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
                        <p style={{'color': '#f3a181'}}>Slow</p>
                        <p>{slowGas} </p>
                    </div>
                    <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 2vw', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '0px 32px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
                        <p style={{'color': '#f8ff92'}}>Normal</p>
                        <p>{normalGas} </p>
                    </div>
                    <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 2vw', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '0px 32px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
                        <p style={{'color': '#8bf57d'}}>Fast</p>
                        <p>{fastGas} </p>
                    </div>
                </div>
                </EthDiv>
            </OuterDiv>
        </div>
    );
};

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

const SearchBar = styled(motion.div)`
  padding: 0rem 0rem 2rem 0rem;
  text-align: center;
  input {
    width: 50vw;
    max-width: 400px;
    font-size: 16px;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  button {
    font-size: 16px;
    border: none;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background: rgb(31, 33, 36);
    color: white;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  textarea:focus, input:focus{
    outline: none;
  }
`;

const EthDiv = styled(motion.div)`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  background: rgb(31, 33, 36);
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(31, 33, 36, 0.4);
  border: 0px solid rgb(88, 91, 104);
  width: 90vw;
  max-width: 700px;
  p { 
    font-size: 18px;
    color: whitesmoke;
  }
`

const OuterDiv = styled(motion.div)`
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin: 0vw 10vw;
`;

export default Eth;