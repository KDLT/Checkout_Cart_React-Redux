import React, { Component } from "react";

const Tax = (props) => {
  return(
    <div className="flex-item" id="tax">
      <div className="flex-text">
        Est. Tax and Fees
        <div id="subtax">(based on 94085)</div>
      </div>
      <div className="flex-result" id="cart-tax">
        ${props.tax}
      </div>
    </div>
  );
}

export default Tax;
