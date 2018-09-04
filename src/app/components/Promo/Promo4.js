import React, { Component } from "react";

class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: "",
      promoPlaceHolder: "",
      promoMounted: false,
      disableDiscount: false,
      invalidStyle: {},
      disabledStyle: {},
      promoWellStyle: {
        opacity: 0,
        transform: "scale(0)"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.togglePromoWell = this.togglePromoWell.bind(this);
    this.toggleWellStyle = this.toggleWellStyle.bind(this);
    this.disablePromoForm = this.disablePromoForm.bind(this);
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
    else {
      this.setState({ invalidStyle: { border: "solid 1px rgb(255, 47, 47)" } })
    }
  }
  togglePromoWell() {
    this.setState({ promoMounted: !this.state.promoMounted });
    this.toggleWellStyle();
  }
  toggleWellStyle() {
    if (!this.state.promoMounted) {
      this.setState({
        promoWellStyle: {
          // opacity: 1,
          transform: "scale(1) translate(0%)"
        }
      });
    }
    else {
      this.setState({
        promoWellStyle: {
          // opacity: 0,
          height: 0,
          position: "absolute",
          top: 0, left: 0,
          transform: "scale(0) translateY(200rem)"
        }
      });
    }
  }
  disablePromoForm() {
    this.setState({ disabledStyle: {background: "rgb(195, 195, 195)"} });
  }
  render() {
    console.log("this.state.promoMounted?", this.state.promoMounted);
    console.log("promoWellStyle:", this.state.promoWellStyle);
    // console.log("this.state.promoWellStyle?", this.state.promoWellStyle);
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
              placeholder="Enter promo code"
              value={this.state.promoCode}
              onChange={this.handleChange}
              style={this.state.disabledStyle}
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
