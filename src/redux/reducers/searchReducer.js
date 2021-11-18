import {
  SET_SEARCH_STRING
} from "../actions/actionTypes";


const initialState = {
  searchString: ""
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return Object.assign({}, state, {
        ...state,
        searchString: action.payload
      });


    default:
      return state;
  }
}