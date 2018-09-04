import { GET_DATA, CYCLE_INDEX, GET_TAX } from "../actions/productActions";

const initialState = {
  productName: "",
  quantity: 0,
  subTotal: 0,
  currentIndex: 0,
  imgsrc: "",
  estTotal: 0,
  tax: 0,
  savings: 3.85
}

const ProductReducer = (state = initialState, actions) => {
  switch (action.type) {
    case GET_DATA:


    case CYCLE_INDEX:
      return state

    case GET_TAX:
      return {
        ...state,
        tax: (state.subTotal*action.tax_percent).toFixed(2)
      }
  }
}
