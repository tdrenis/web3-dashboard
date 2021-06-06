const initState = {
    pools: [],
  };
  
  const poolsReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_POOLS":
        return {
          ...state,
          pools: action.payload.pools,
        };
      default:
        return { ...state };
    }
  };
  
  export default poolsReducer;