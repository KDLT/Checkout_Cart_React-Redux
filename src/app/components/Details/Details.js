import React, { Component } from "react";

const Details = (props) => {
  let detailsWell = "";
  if (props.detailsMounted) {
    detailsWell = (
      <div className="flex-well" id="card-well">
        <div className="img-div">
          <img src={props.imgsrc}></img>
        </div>
        <div className="product-details">
          <div className="product-name">{props.productName}</div>
          <div className="estTotal">${props.estTotal}</div>
          <div className="qty">Qty: {props.qty}</div>
        </div>
      </div>
    );
  }
  // console.log("props.detailsMounted?", props.detailsMounted);
  return(
    <div className="flex-item" id="itemcard">
      <div className="flex-text">
        <a href="#" id="collapser" onClick={props.toggleDetailsWell}>
          {props.detailsMounted ? "Hide item details -" : "See item detail +"}
        </a>
      </div>
      {detailsWell}
    </div>
  );
}

export default Details;
