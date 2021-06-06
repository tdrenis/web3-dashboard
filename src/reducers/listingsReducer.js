const initState = {
    listings: [],
  };
  
  const listingsReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_LISTINGS":
        return {
          ...state,
          listings: action.payload.listings,
        };
      default:
        return { ...state };
    }
  };
  
  export default listingsReducer;