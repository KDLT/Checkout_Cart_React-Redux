import React, { Component } from "react";

const Savings = (props) => {
  return(
    <div className="flex-item" id="savings">
      <div className="flex-text">
        <a href="#" id="tooltip">Pickup Savings</a>
      </div>
      <div className="flex-result" id="cart-savings">
        -${props.savings}
      </div>
    </div>
  );
}

export default Savings;
