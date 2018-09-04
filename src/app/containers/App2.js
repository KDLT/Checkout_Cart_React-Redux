import React, {Component} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import * as products from "./resources/products.json";
// import "./resources/products.json";
// import { quotes } from "./resources/quotes.json";

import "../styles/main.scss";
import Subtotal from "./components/Subtotal/Subtotal";
import Savings from "./components/Savings/Savings";
import Tax from "./components/Tax/Tax";
import Total from "./components/Total/Total";
import Details from "./components/Details/Details";
// import Promo from "./components/Promo/Promo";
import PromoComponent from "./components/Promo/components/PromoComponent";

var productsArr = products.default

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      quantity: 0,
      subTotal: 0,
      currentIndex: 0,
      imgsrc: "",
      estTotal: 0,
      tax: 0,
      savings: 3.85,
      detailsMounted: false,
    }
    this.getJSON = this.getJSON.bind(this);
    this.toggleDetailsWell = this.toggleDetailsWell.bind(this);
    this.applyDiscount = this.applyDiscount.bind(this);
  }
  getJSON() {
    let i = this.state.currentIndex;
    let subTotal = parseFloat(productsArr[i].unit_cost.slice(1));
    let tax = subTotal*0.0875;
    let savings = this.state.savings;
    let estTotal = (productsArr[i].quantity * subTotal + tax - savings).toFixed(2);
    console.log("tax:",tax,"savings:",savings,"subTotal:",subTotal, "qty:", productsArr[i].quantity)
    return(
      this.setState({
        productName: productsArr[i].product_name,
        quantity: productsArr[i].quantity,
        subTotal: subTotal,
        tax: (subTotal*0.0875).toFixed(2),
        estTotal: estTotal,
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
  }
  toggleDetailsWell() {
    this.setState({ detailsMounted: !this.state.detailsMounted })
    console.log("detailsMounted: ", this.state.detailsMounted)
  }
  applyDiscount(e) {
    this.setState({
      estTotal: (this.state.estTotal * 0.9).toFixed(2),
      disableDiscount: true
    });
  }
  render() {
    // console.log("placeHolder in PromoComponent:",this.props.promoPlaceHolder);
    return (
        <div className="flex-card">
          <button onClick={this.getJSON}>SOME BUTTON</button>
          <Subtotal subTotal={this.state.subTotal} />
          <Savings savings={this.state.savings}/>
          <Tax tax={this.state.tax}/>
          <Total estTotal={this.state.estTotal}/>
          <hr/>
          <Details productName={this.state.productName}
            imgsrc={this.state.imgsrc}
            estTotal={this.state.estTotal}
            qty={this.state.quantity}
            detailsMounted={this.state.detailsMounted}
            toggleDetailsWell={this.toggleDetailsWell}/>
          <hr/>
          {/* <Promo applyDiscount={this.applyDiscount}/> */}
          {/* <PromoComponent promoPlaceHolder={this.props.promoPlaceHolder}
            promoCode={this.props.promoCode}
            handleChange={this.props.handleChange}
            activeStyle={this.props.activeStyle}
            disableDiscount={this.props.disableDiscount}
            applyDiscount={this.applyDiscount}
            disablePromoForm={this.props.disablePromoForm}
          setInvalidStyle={this.props.setInvalidStyle}/> */}
          <PromoComponent props={this.props}
            applyDiscount={this.applyDiscount}/>
        </div>
    );
  }
}

export default App
