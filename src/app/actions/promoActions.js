export const TOGGLE_PROMO_WELL = "TOGGLE_PROMO_WELL";
export const DISABLE_FORM = "DISABLE_FORM";
export const INVALID_STYLE = "INVALID_STYLE";
export const VALID_STYLE = "VALID_STYLE";
export const INPUT_CHANGE = "INPUT_CHANGE";

// actions only describe the action with type property
// actions can also receive inputs
export const togglePromoWell = () => {
  return { type: TOGGLE_PROMO_WELL };
};

export const disablePromoForm = () => {
  return { type: DISABLE_FORM }
};

export const setInvalidStyle = () => {
  return {
    type: INVALID_STYLE,
    placeholder: "Invalid Promo Code",
    style: {
      border: "solid 1px rgba(255, 47, 47, 0.8)",
      background: "rgba(255, 0, 0, 0.05)"
    }
  };
};

export const setValidStyle = () => {
  return {
    type: VALID_STYLE,
    style: {
      border: "none",
      // background: "rgba(255, 0, 0, 0.05)"
    }
  };
};

export const handlePromoChange = (e) => {
  return {
    type: INPUT_CHANGE,
    payload: e.target.value,
    placeholder: "Enter Promo Code",
    style: {
      border: "none",
      background: "white"
    }
  }
}
