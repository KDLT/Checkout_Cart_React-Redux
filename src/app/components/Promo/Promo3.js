import React, { Component } from "react";

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: "",
      promoPlaceHolder: "",
      invalidStyle: {},
      disabledStyle: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.disablePromoForm = this.disablePromoForm.bind(this);
  }
  handleChange(e) {
    this.setState({ promoCode: e.target.value })
  }
  handleSubmit() {
    if (this.state.promoCode == "DISCOUNT" ) {
      this.props.applyDiscount();
    }
    else {
      this.setState({ invalidStyle: { border: "solid 1px rgb(255, 47, 47)" } })
    }
  }
  disablePromoForm() {
    this.setState({
      disabledStyle: { background: "gray" }
    });
  }
  render() {
    console.log("props.promoMounted?", this.props.promoMounted);
    let promoWell = "";
    if (this.props.promoMounted) {
      promoWell = (
        <div className="flex-well">
          <form className="well-form" onSubmit={this.handleSubmit}>
            <label htmlFor="promo">Promo Code</label>
            <input type="text"
              id="promo-form"
              placeholder="Enter promo code"
              value={this.state.promoCode}
              onChange={this.handleChange}
              style={this.state.disabledStyle}
              disabled={this.props.disableDiscount}/>
            <button type="submit"
              className="apply-button" id="promo-button"
              style={this.state.disabledStyle}
              disabled={this.props.disableDiscount}>
              {!this.props.disableDiscount ? "Apply" : "10% Discount Applied"}
            </button>
          </form>
        </div>
      );
    }
    return(
      <div className="flex-item" id="promocard">
        <div className="flex-text">
          <a href="#" id="collapser" onClick={this.props.togglePromoWell}>
            {this.props.promoMounted ? "Hide promo code -" : "Apply promo code +"}
          </a>
        </div>
        {promoWell}
      </div>
    );
  }
}

export default Promo;
