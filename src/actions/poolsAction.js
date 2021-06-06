import axios from "axios";

//Action Creator
export const loadPools = () => async (dispatch) => {
    // FETCH AXIOS
    axios({
        url: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        method: 'post',
        data: {
        query: `
        {
            pairs(first: 10, where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"}, orderBy: volumeUSD, orderDirection: desc) {
            id
            token0 {
                id
                symbol
            }
            token1 {
                id
                symbol
            }
            reserveUSD
            volumeUSD
            }
        }
            `
        }
        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: "FETCH_POOLS",
                payload: {
                  pools: result.data.data.pairs,
                },
              });
        });
  };
