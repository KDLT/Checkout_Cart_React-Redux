import { TOGGLE_DETAILS_WELL } from "../actions/detailActions";
// we import the action constants here which are used in the switch case

const initialState = {
  detailsMounted: false
};

const DetailReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_DETAILS_WELL:
      return {...state, detailsMounted: !state.detailsMounted }

    default:
      return state
  }
}

export default DetailReducer;
