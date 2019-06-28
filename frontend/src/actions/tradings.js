import axios from "axios";
import { GET_BUY, GET_SELL, GET_TRADINGS } from "./types";

// GET BUY TRADING
export const getTradings = () => dispatch => {
  // GET BUT LIST
  axios
    .get("/api/v1/")
    .then(res => {
      console.log("BUY DATA", res.data);
      dispatch({
        type: GET_BUY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));

  // GET SELL LIST
  axios
    .get("/api/v1/sell/")
    .then(res => {
      console.log("SELL DATA", res.data);
      dispatch({
        type: GET_SELL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));

  // GET SELL TRADINGS
  axios
    .get("https://api.bitbay.net/rest/trading/orderbook/BTC-PLN")
    .then(res => {
      console.log("OUTER API DATA", res.data);
      dispatch({
        type: GET_TRADINGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
