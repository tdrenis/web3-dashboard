import axios from "axios";
import {
  listingsUrl,
} from "../api";

//Action Creator
export const loadListings = () => async (dispatch) => {
    //FETCH AXIOS
    const listingsData = await axios.get(listingsUrl());
    dispatch({
      type: "FETCH_LISTINGS",
      payload: {
        listings: listingsData.data.asset_events,
      },
    });
  };