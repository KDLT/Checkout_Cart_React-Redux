import React, { Component } from "react";

const PromoComponent = (props) => {
  function handleSubmit() {
    if (props.reduxStore.promo.promoCode == "DISCOUNT" ) {
      props.applyDiscount();
      props.reduxStore.setValidStyle();
      props.reduxStore.disablePromoForm();
    }
    else { // when discount code's invalid
      props.reduxStore.setInvalidStyle();
    }
  }
  // console.log("non-function redux props in promoComponent:",props.reduxStore.promo); // states lang
  // console.log("all redux props in promoComponent:",props.reduxStore) // with dispatch
  return(
    <div className="flex-item" id="promocard">
      <div className="flex-text">
        <a href="#" id="collapser" onClick={props.reduxStore.togglePromoWell}>
          {props.reduxStore.promoMounted ? "Hide promo code -" : "Apply promo code +"}
        </a>
      </div>
      <div className="flex-well" style={props.reduxStore.promo.promoWellStyle}>
        <form className="well-form" onSubmit={handleSubmit}>
          <label htmlFor="promo">Promo Code</label>
          <input type="text"
            id="promo-form"
            placeholder={props.reduxStore.promo.promoPlaceHolder}
            value={props.reduxStore.promo.promoCode}
            onChange={props.reduxStore.handlePromoChange}
            style={props.reduxStore.promo.formStyle}
            disabled={props.reduxStore.promo.disableDiscount}/>
          <button type="submit"
            className="apply-button" id="promo-button"
            disabled={props.reduxStore.promo.disableDiscount}>
            {!props.reduxStore.promo.disableDiscount ? "Apply" : "10% Discount Applied"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PromoComponent;
