import React, {Component} from "react";
import { render } from "react-dom";

import * as products from "./resources/products.json";
// import "./resources/products.json";
// import { quotes } from "./resources/quotes.json";

import "../styles/main.scss";
import Subtotal from "./components/Subtotal/Subtotal";

var productsArr = products.default

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      quantity: 0,
      unitPrice: 0,
      currentIndex: 0,
      subTotal: 0,
    }
    this.getJSON = this.getJSON.bind(this);
  }
  componentDidUpdate() {
    if (this.state.currentIndex >= productsArr.length) {
      // console.log("returning currentIndex to 0")
      this.setState({ currentIndex: 0 })
      // console.log("current index:",this.state.currentIndex)
    }
    console.log("Updated! current index:",this.state.currentIndex);
  }
  getJSON() {
    console.log()
    let i = this.state.currentIndex;
    let currentUnitPrice = parseFloat(productsArr[i].unit_cost.slice(1))
    return(
      this.setState({
        productName: productsArr[i].product_name,
        quantity: productsArr[i].quantity,
        unitPrice: currentUnitPrice,
        subTotal: productsArr[i].quantity*currentUnitPrice,
        currentIndex: this.state.currentIndex + 1
      })
    );
  }
  render() {
    // console.log(products[0].quantity)
    return (
      <div className="main-container">
        <h1>Product: {this.state.productName}</h1>
        <h1>Quantity: {this.state.quantity}</h1>
        <h1>Unit Price: ${this.state.unitPrice}</h1>
        <h1>Subtotal: ${this.state.subTotal}</h1>
        <button onClick={this.getJSON}>UPDATE QUANTITY</button>
        <div className="flex-card">
          <Subtotal subTotal={this.state.subTotal} />
          <div className="flex-item" id="savings">
            <div className="flex-text">
              Pickup Savings
            </div>
            <div className="flex-result" id="cart-savings">
              -$3.85
            </div>
          </div>
          <div className="flex-item" id="tax">
            <div className="flex-text">
              Est. Tax and Fees<br />(based on 94085)
            </div>
            <div className="flex-result" id="cart-tax">
              $8.92
            </div>
          </div>
          <hr/>
          <div className="flex-item" id="total">
            <div className="flex-text">
              Est. Total
            </div>
            <div className="flex-result" id="cart-total">
              $108.03
            </div>
          </div>
          <div className="flex-item" id="details">
            <div className="flex-text">
              See item details +
            </div>
          </div>
          <hr/>
          <div className="flex-item" id="promo-code">
            <div className="flex-text">
              Apply promo code +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));
