import { GET_BUY, GET_SELL, GET_TRADINGS } from "../actions/types.js";

const initialState = {
  tradings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUY:
      return {
        ...state,
        tradings: action.payload
      };
    case GET_SELL:
      return {
        ...state,
        sellTrading: action.payload
      };
    case GET_TRADINGS:
      return {
        ...state,
        trading1: action.payload
      };
    default:
      return state;
  }
}
