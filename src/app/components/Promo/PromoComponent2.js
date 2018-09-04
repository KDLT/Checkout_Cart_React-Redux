import React, { Component } from "react";

class PromoComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    if (this.props.props.promoCode == "DISCOUNT" ) {
      this.props.applyDiscount();
      // this.setState({ disableDiscount: true });
      this.props.props.disablePromoForm();
    }
    else { // when discount code's invalid
      this.props.props.setInvalidStyle();
    }
  }
  render() {
    console.log(this.props)
    // console.log("placeHolder in PromoComponent:",this.props.promoPlaceHolder);
    // console.log("handleChange in PromoComponent:",this.props.handleChange)
    return(
      <div className="flex-item" id="promocard">
        <div className="flex-text">
          <a href="#" id="collapser" onClick={this.props.props.togglePromoWell}>
            {this.props.props.promoMounted ? "Hide promo code -" : "Apply promo code +"}
          </a>
        </div>
        <div className="flex-well" style={this.props.props.promoWellStyle}>
          <form className="well-form" onSubmit={this.handleSubmit}>
            <label htmlFor="promo">Promo Code</label>
            <input type="text"
              id="promo-form"
              placeholder={this.props.props.promoPlaceHolder}
              value={this.props.props.promoCode}
              onChange={this.props.props.handleChange}
              style={this.props.props.activeStyle}
              disabled={this.props.props.disableDiscount}/>
            <button type="submit"
              className="apply-button" id="promo-button"
              disabled={this.props.props.disableDiscount}>
              {!this.props.props.disableDiscount ? "Apply" : "10% Discount Applied"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PromoComponent;
