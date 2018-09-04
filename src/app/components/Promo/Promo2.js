import React, { Component } from "react";

const Promo = (props) => {
  function handleSubmit() {
    let promoForm = document.getElementById("promo-form");
    // console.log("handleSubmit triggered")
    if (promoForm != undefined) {
      console.log(promoForm.value);
      if (promoForm.value == "DISCOUNT") {
        promoForm.style.border = "none";
        document.getElementById("promo-button").innerHTML = "Applied!"
        props.applyDiscount();
      } else {
        promoForm.style.border = "solid 2px rgb(235, 97, 97)";
        promoForm.value = "";
        promoForm.placeholder = "invalid promo code"
      }
    }
  }
  let promoWell = "";
  if (props.promoMounted) {
    promoWell = (
      <div className="flex-well">
        <form className="well-form" onSubmit={handleSubmit}>
          <label htmlFor="promo">Promo Code</label>
          <input type="text"
            id="promo-form"
            placeholder="Enter promo code"
            disabled={props.disableDiscount}/>
          <button type="submit" className="apply-button" id="promo-button"
            disabled={props.disableDiscount}>
            Apply
          </button>
        </form>
      </div>
    );
  }
  console.log("props.promoMounted?", props.promoMounted);
  return(
    <div className="flex-item" id="promocard">
      <div className="flex-text">
        <a href="#" id="collapser" onClick={props.togglePromoWell}>
          {props.promoMounted ? "Hide promo code -" : "Apply promo code +"}
        </a>
      </div>
      {promoWell}
    </div>
  );
}

export default Promo;
