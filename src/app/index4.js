import React, {Component} from "react";
import { render } from "react-dom";

import * as products from "./resources/products.json";
// import "./resources/products.json";
// import { quotes } from "./resources/quotes.json";

import "../styles/main.scss";
import Subtotal from "./components/Subtotal/Subtotal";
import Savings from "./components/Savings/Savings";
import Tax from "./components/Tax/Tax";
import Total from "./components/Total/Total";
import Details from "./components/Details/Details";
import Promo from "./components/Promo/Promo";

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
      imgsrc: "",
      subTotal: 0,
      tax: 8.92,
      savings: 3.85
    }
    this.getJSON = this.getJSON.bind(this);
  }
  getJSON() {
    let i = this.state.currentIndex;
    let unitPrice = parseFloat(productsArr[i].unit_cost.slice(1))
    let tax = this.state.tax;
    let savings = this.state.savings;
    let subTotal = (productsArr[i].quantity * unitPrice + tax - savings).toFixed(2);
    console.log("tax:",tax,"savings:",savings,"unitPrice:",unitPrice, "qty:", productsArr[i].quantity)
    return(
      this.setState({
        productName: productsArr[i].product_name,
        quantity: productsArr[i].quantity,
        unitPrice: unitPrice,
        subTotal: subTotal,
        currentIndex: this.state.currentIndex + 1,
        imgsrc: productsArr[i].img_src,
      })
    );
  }
  componentDidMount() {
    console.log("component mounted!",products);
    this.getJSON();
  }
  componentDidUpdate() {
    if (this.state.currentIndex >= productsArr.length) {
      this.setState({ currentIndex: 0 })
    }
    console.log("component updated! currentIndex:", this.state.currentIndex)
  }
  render() {
    // console.log(products[0].quantity)
    let sample = <div>
      <h1>Product: {this.state.productName}</h1>
      <h1>Quantity: {this.state.quantity}</h1>
      <h1>Unit Price: ${this.state.unitPrice}</h1>
      <h1>Subtotal: ${this.state.subTotal}</h1>
    </div>
    return (
        <div className="flex-card">
          <button onClick={this.getJSON}>SOME BUTTON</button>
          <Subtotal unitPrice={this.state.unitPrice} />
          <Savings savings={this.state.savings}/>
          <Tax tax={this.state.tax}/>
          <Total subTotal={this.state.subTotal}/>
          <hr/>
          <Details productName={this.state.productName} imgsrc={this.state.imgsrc}/>
          <hr/>
          <Promo />
        </div>
    );
  }
}

render(<App/>, document.getElementById("app"));
