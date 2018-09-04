import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/rootReducer";
import PromoReducer from "./reducers/PromoReducer";

// export const store = createStore(
//   PromoReducer,
//   {},
//   applyMiddleware(thunk)
// );

const store = createStore(RootReducer,applyMiddleware(thunk));

export default store
