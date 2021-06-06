import axios from "axios";
import {
  gasUrl,
  priceUrl,
  supplyUrl,
} from "../api";

//Action Creator
export const loadEth = () => async (dispatch) => {
    //FETCH AXIOS
    const supplyData = await axios.get(supplyUrl());
    const priceData = await axios.get(priceUrl());
    const gasData = await axios.get(gasUrl());
    dispatch({
      type: "FETCH_ETH",
      payload: {
        supply: supplyData.data.result,
        usd_price: priceData.data.result.ethusd,
        btc_price: priceData.data.result.ethbtc,
        slowGas: gasData.data.result.SafeGasPrice,
        normalGas: gasData.data.result.ProposeGasPrice,
        fastGas: gasData.data.result.FastGasPrice,
      },
    });
  };