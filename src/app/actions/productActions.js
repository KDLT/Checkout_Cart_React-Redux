export const CYCLE_INDEX = "CYCLE_INDEX";
export const GET_TAX = "GET_TAX";
export const GET_DATA = "GET_DATA";

export const getData = () => {
  return {
    type: GET_DATA
  }
}

export const cycleIndex = () => {
  return {
    type: CYCLE_INDEX
  }
}

export const getTax = () => {
  return {
    type: GET_TAX,
    tax_percent: 0.0875
  }
}
