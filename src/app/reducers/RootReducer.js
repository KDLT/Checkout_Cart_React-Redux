import PromoReducer from "./PromoReducer"
import DetailReducer from "./DetailReducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  promo: PromoReducer,
  detail: DetailReducer
});

export default RootReducer;
