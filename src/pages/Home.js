import React, { useEffect } from "react";
// Components
import NFT from "../components/NFT";
// Images
import os from "../img/os-logo.png";
import uni from "../img/uni-logo.png";
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
        backgroundColor: 'pink',
        border: '5px solid #ff8ec4',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgba(255, 255, 255, 0.15)',
    },
    tableCell: {
        color: '#424242',
        fontSize: '16px',
        borderBlockColor: '#ffcbe4',
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
      <TopBar>
        <h1>Web3 Dashboard</h1>
      </TopBar>
      <h1>eth supply: {formatter.format(supply/1000000000000000000)}</h1>
      <h1>eth price (usd): {cFormatter.format(usd_price)} </h1>
      <h1>eth price (btc): {cFormatter.format(btc_price)} </h1>
      <h1>gas (in gwei):</h1>
      <h1>slow: {slowGas} </h1>
      <h1>normal: {normalGas} </h1>
      <h1>fast: {fastGas} </h1>
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

const TopBar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  h1 { 
      font-weight: lighter;
      color: whitesmoke;
  }
`;

const SubBar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img { 
      height: 2.5rem;
  }
  h3 { 
      font-weight: lighter;
  }
`;

const TableDiv = styled(motion.div)`
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