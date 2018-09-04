import React, { Component } from "react";

const PromoComponent = (props) => {
  function handleSubmit() {
    if (props.reduxStore.promoCode == "DISCOUNT" ) {
      props.applyDiscount();
      props.reduxStore.setValidStyle();
      props.reduxStore.disablePromoForm();
    }
    else { // when discount code's invalid
      props.reduxStore.setInvalidStyle();
    }
  }
  // console.log(props.reduxStore)
  return(
    <div className="flex-item" id="promocard">
      <div className="flex-text">
        <a href="#" id="collapser" onClick={props.reduxStore.togglePromoWell}>
          {props.reduxStore.promoMounted ? "Hide promo code -" : "Apply promo code +"}
        </a>
      </div>
      <div className="flex-well" style={props.reduxStore.promoWellStyle}>
        <form className="well-form" onSubmit={handleSubmit}>
          <label htmlFor="promo">Promo Code</label>
          <input type="text"
            id="promo-form"
            placeholder={props.reduxStore.promoPlaceHolder}
            value={props.reduxStore.promoCode}
            onChange={props.reduxStore.handlePromoChange}
            style={props.reduxStore.formStyle}
            disabled={props.reduxStore.disableDiscount}/>
          <button type="submit"
            className="apply-button" id="promo-button"
            disabled={props.reduxStore.disableDiscount}>
            {!props.reduxStore.disableDiscount ? "Apply" : "10% Discount Applied"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PromoComponent;
