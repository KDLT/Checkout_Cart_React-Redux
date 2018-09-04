import React from "react";
import { connect } from "react-redux";
import PromoComponent from "./components/PromoComponent";
import { togglePromoWell, disablePromoForm, setInvalidStyle, handleChange } from "../../actions/promoActions";

const mapStateToProps = (state) => {
  return {
    promoCode: state.promoCode,
    promoPlaceHolder: state.promoPlaceHolder,
    promoMounted: state.promoMounted,
    disableDiscount: state.disableDiscount,
    activeStyle: state.activeStyle,
    promoWellStyle: state.promoWellStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePromoWell: () => {
      dispatch(togglePromoWell())
    },
    disablePromoForm: () => {
      dispatch(disablePromoForm())
    },
    setInvalidStyle: () => {
      dispatch(setInvalidStyle())
    },
    handleChange: (e) => {
      dispatch(handleChange(e))
    }
  }
}

export const PromoContainer = connect(mapStateToProps, mapDispatchToProps)(PromoComponent)
