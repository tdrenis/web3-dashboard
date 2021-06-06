import React, { useEffect } from "react";
// Images
import uni from "../img/uni-logo.png";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPools } from "../actions/poolsAction";
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

const useStyles = makeStyles((theme) => ({
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
}));

const Defi = () => {
    
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPools());
  }, [dispatch]);

  const { pools } = useSelector(
    (state) => state.pools
  );

  const cFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="Defi" style={{'marginTop': '1rem'}}>
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

const TableDiv = styled(motion.div)`
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export default Defi;