import axios from "axios";

const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const fetchSuccess = (coins) => {
  return {
    type: "FETCH_SUCCESS",
    payload: coins,
  };
};
const fetchFailure = (error) => {
  return {
    type: "FETCH_FAILURE",
    payload: error,
  };
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false",
      )
      .then((response) => {
        const coins = response.data;
        dispatch(fetchSuccess(coins));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFailure(errorMsg));
      });
  };
};

const fetchCoinID = (id) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        const coins = response.data;
        dispatch(fetchSuccess(coins));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFailure(errorMsg));
      });
  };
};

export { fetchRequest, fetchSuccess, fetchFailure, fetchData, fetchCoinID };
