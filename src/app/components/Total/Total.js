import React, { Component } from "react";

const Total = (props) => {
  return(
    <div className="flex-item" id="total">
      <div className="flex-text">
        Est. Total
      </div>
      <div className="flex-result" id="cart-total">
        ${props.estTotal}
      </div>
    </div>
  );
}

export default Total;
