import React, {Component} from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import App from "./containers/App"
import store from "./store";
import { togglePromoWell, disablePromoForm, setInvalidStyle, setValidStyle, handlePromoChange } from "./actions/promoActions";
import { toggleDetailsWell } from "./actions/detailActions";

// const mapStateToProps = (state) => {
//   return {
//     promoCode: state.promoCode,
//     promoPlaceHolder: state.promoPlaceHolder,
//     promoMounted: state.promoMounted,
//     disableDiscount: state.disableDiscount,
//     formStyle: state.formStyle,
//     promoWellStyle: state.promoWellStyle,
//     detailsMounted: state.detailsMounted
//   }
// }

const mapStateToProps = (state) => {
  return {
    promo: state.promo, // laman ng promo lahat ng state na nadeclare sa PromoReducer
    detail: state.detail // HINDI arbitrarily chosen dito ang .promo and .detail
    // must be the same with the key (if you used a one) used in combineReducers
  }
}

const mapDispatchToProps = (dispatch) => {
  // here actions are passed as props using the dispatch method
  return {
    togglePromoWell: () => dispatch(togglePromoWell()),
    disablePromoForm: () => dispatch(disablePromoForm()),
    setInvalidStyle: () => dispatch(setInvalidStyle()),
    setValidStyle: () => dispatch(setValidStyle()),
    handlePromoChange: (e) =>  dispatch(handlePromoChange(e)),
    toggleDetailsWell: () => dispatch(toggleDetailsWell())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
    document.getElementById("app")
)
