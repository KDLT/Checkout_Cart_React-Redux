import { TOGGLE_PROMO_WELL, DISABLE_FORM, INVALID_STYLE, VALID_STYLE, INPUT_CHANGE } from "../actions/promoActions";
// we import the action constants here which are used in the switch case

const initialState = {
  promoCode: "",
  promoPlaceHolder: "Enter Promo Code",
  promoMounted: false,
  disableDiscount: false,
  formStyle: {},
  promoWellStyle: { display: "none" }
};

const PromoReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_PROMO_WELL:
      if (!state.promoMounted) {
        state = {...state,
          promoWellStyle: { display: "flex" }
        }
      }
      else {
        state = {...state,
          promoWellStyle: { display: "none" }
        }
      }
      state = {...state, promoMounted: !state.promoMounted }
      return state

    case DISABLE_FORM:
      state = {...state,
        disableDiscount: true
      }
      return state

    case INVALID_STYLE:
      state = {...state,
        promoCode: "",
        promoPlaceHolder: action.placeholder,
        formStyle: action.style
      }
      return state

    case VALID_STYLE:
      state = {...state,
        formStyle: action.style
      }

    case INPUT_CHANGE:
      return {...state,
        promoCode: action.payload,
        promoPlaceHolder: action.placeholder,
        formStyle: action.style
      }

    default:
      return state
  }
}

export default PromoReducer;
