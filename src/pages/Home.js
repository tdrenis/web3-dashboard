import React, { useEffect } from "react";
// Components
import NFT from "../components/NFT";
// Images
import os from "../img/os-logo.png";
import uni from "../img/uni-logo.png";
import eth from "../img/eth-logo.png";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadListings } from "../actions/listingsAction";
import { loadPools } from "../actions/poolsAction";
import { loadEth } from "../actions/ethAction";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
    }, 
    tableContainer: { 
        maxWidth: 750,
        backgroundColor: 'rgb(250, 215, 232)',
        borderRadius: '15px',
        border: '0px solid rgb(290, 0, 119)',
        boxShadow: '0px 5px 20px rgba(290, 0, 119, 0.4)',
        margin: '0rem 2rem',
    },
    tableCell: {
        color: 'rgb(39, 41, 45)',
        fontSize: '16px', 
        borderBlockColor: 'rgb(250, 235, 242)',
    },
});

const Home = () => {
    
  const classes = useStyles();

  //FETCH DATA
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListings());
    dispatch(loadPools());
    dispatch(loadEth());
  }, [dispatch]);
  //Get that data back
  const { listings } = useSelector(
    (state) => state.listings
  );
  const { pools } = useSelector(
    (state) => state.pools
  );
  const { supply, usd_price, btc_price, slowGas, normalGas, fastGas } = useSelector(
    (state) => state.eth
  );

  const cFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const formatter = new Intl.NumberFormat('en-US', {
  });

  return (
    <div className="Home">
      <SubBar style={{'marginTop': '-2rem'}}>
        <img src={eth} alt=""/>
        <h3>Ethereum Snapshot</h3>
      </SubBar>
      <OuterDiv>
        <EthDiv>
          <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'column', 'marginRight': '20px', 'background': 'rgb(39, 41, 45)', 'padding': '12px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
              <p>Supply</p>
              <p> {formatter.format(supply/1000000000000000000)}</p>
            </div>
            <div style={{'display': 'flex', 'flex-direction': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'background': 'rgb(39, 41, 45)', 'padding': '12px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
              <p style={{'marginTop': '7px'}}>Price (USD): {cFormatter.format(usd_price)} </p>
              <p>Price (BTC): {formatter.format(btc_price)} BTC</p>
            </div>
          </div>
        </EthDiv>
        <EthDiv style={{'flexDirection': 'column', 'marginBottom': '2rem'}}>
          <div style={{'marginBottom': '15px'}}>
            <p>Gas (in Gwei):</p>
          </div>
          <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 20px', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '6px 28px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
              <p style={{'color': '#f38181'}}>Slow</p>
              <p>{slowGas} </p>
            </div>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 20px', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '6px 28px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
              <p style={{'color': '#f8ff92'}}>Normal</p>
              <p>{normalGas} </p>
            </div>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0px 20px', 'flexDirection': 'column', 'background': 'rgb(39, 41, 45)', 'padding': '6px 28px', 'borderRadius': '10px', 'border': '2px solid rgb(88, 91, 104)'}}>
              <p style={{'color': '#8bf57d'}}>Fast</p>
              <p>{fastGas} </p>
            </div>
          </div>
        </EthDiv>
      </OuterDiv>
      <SubBar>
        <h3>Top liquidity pools on &nbsp;</h3>
        <img src={uni} alt="OpenSea"/>
      </SubBar>
      <TableDiv>
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.tableCell} align='center'>Token Pair</TableCell>
                    <TableCell className={classes.tableCell} align='center'>Volume (USD)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pools.map( (pool, idx) => (
                    <TableRow key={idx}>
                        <TableCell className={classes.tableCell} align='center' component="th" scope="row">
                        {pool.token0.symbol} / {pool.token1.symbol}
                        </TableCell>
                        <TableCell className={classes.tableCell} align='center'>{cFormatter.format(pool.volumeUSD)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      </TableDiv>
      <SubBar>
        <h3>Recent NFT sales on &nbsp;</h3>
        <img src={os} alt="OpenSea"/>
      </SubBar>
      <NFTList>
        <NFTs>
            {listings.map( (listing, idx) => (
                <div key={idx}>
                    {listing.asset && 
                    <NFT
                        name={listing.asset.name ? listing.asset.name : 'Unnamed'}
                        price={listing.total_price/10**listing.payment_token.decimals}
                        token_symbol={listing.payment_token.symbol}
                        usd_equiv={listing.payment_token.usd_price}
                        os_url={listing.asset.permalink}
                        img_url={listing.asset.image_url}
                    />
                    }
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

const EthDiv = styled(motion.div)`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  background: rgb(31, 33, 36);
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(31, 33, 36, 0.4);
  border: 0px solid rgb(88, 91, 104);
  width: 90vw;
  max-width: 500px;
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

const TableDiv = styled(motion.div)`
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
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

export default Home;