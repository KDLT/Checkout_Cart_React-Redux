import React, { Component } from "react";

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: "", // this state stays here, handleChange looks at this
      promoPlaceHolder: "Enter Promo Code",
      promoMounted: false,
      disableDiscount: false,
      activeStyle: {},
      promoWellStyle: { display: "none" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.togglePromoWell = this.togglePromoWell.bind(this);
    this.disablePromoForm = this.disablePromoForm.bind(this);
    this.setInvalidStyle = this.setInvalidStyle.bind(this);
  }
  handleChange(e) {
    this.setState({ promoCode: e.target.value })
  }
  handleSubmit() {
    if (this.state.promoCode == "DISCOUNT" ) {
      this.props.applyDiscount();
      this.setState({ disableDiscount: true });
      this.disablePromoForm();
    }
    else { // when discount code's invalid
      this.setInvalidStyle();
    }
  }
  togglePromoWell() { // second function that contains the first function
    if (!this.state.promoMounted) { // if it ain't mounted, mount it
      this.setState( { promoWellStyle: { display: "flex" } })
    }
    else {
      this.setState( { promoWellStyle: { display: "none" } });
    }
    this.setState({ promoMounted: !this.state.promoMounted }); // first function
    console.log("promoMounted: ",this.state.promoMounted);
  }
  setInvalidStyle() {
    this.setState({
      promoCode: "",
      promoPlaceHolder: "Invalid Promo Code",
      activeStyle: { border: "solid 1px rgba(255, 47, 47, 0.8)" },
    });
  }
  disablePromoForm() {
    this.setState({ activeStyle: {background: "rgb(195, 195, 195)"} });
  }
  render() {
    // console.log("props.promoMounted?", this.props.promoMounted);
    // console.log("this.state.promoWellStyle?", this.state.promoWellStyle);
    let currentStyle = {};
    return(
      <div className="flex-item" id="promocard">
        <div className="flex-text">
          <a href="#" id="collapser" onClick={this.togglePromoWell}>
            {this.state.promoMounted ? "Hide promo code -" : "Apply promo code +"}
          </a>
        </div>
        <div className="flex-well" style={this.state.promoWellStyle}>
          <form className="well-form" onSubmit={this.handleSubmit}>
            <label htmlFor="promo">Promo Code</label>
            <input type="text"
              id="promo-form"
              placeholder={this.state.promoPlaceHolder}
              value={this.state.promoCode}
              onChange={this.handleChange}
              style={this.state.activeStyle}
              disabled={this.state.disableDiscount}/>
            <button type="submit"
              className="apply-button" id="promo-button"
              disabled={this.state.disableDiscount}>
              {!this.state.disableDiscount ? "Apply" : "10% Discount Applied"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Promo;
