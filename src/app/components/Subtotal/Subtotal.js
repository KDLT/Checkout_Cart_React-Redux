import React, { Component } from "react";

const Subtotal = (props) => {
  return(
    <div className="flex-item" id="subtotal">
      <div className="flex-text">
        Subtotal
      </div>
      <div className="flex-result" id="cart-subtotal">
        ${props.subTotal}
      </div>
    </div>
  );
}

export default Subtotal
