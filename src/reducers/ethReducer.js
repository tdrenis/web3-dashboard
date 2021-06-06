const initState = {
    supply: '',
    usd_price: '',
    btc_price: '',
    slowGas: '',
    normalGas: '', 
    fastGas: '',
    balance: '',
  };
  
  const ethReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_ETH":
        return {
          ...state,
          supply: action.payload.supply,
          usd_price: action.payload.usd_price,
          btc_price: action.payload.btc_price,
          slowGas: action.payload.slowGas,
          normalGas: action.payload.normalGas, 
          fastGas: action.payload.fastGas,
        };
        case "SEARCH_ETH":
          return {
            ...state,
            balance: action.payload.balance,
          };
      default:
        return { ...state };
    }
  };
  
  export default ethReducer;