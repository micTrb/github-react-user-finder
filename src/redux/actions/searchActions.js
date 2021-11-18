import {SET_SEARCH_STRING} from "./actionTypes.js";


export const setSearchStringAction = (searchString) => {
  return {
    type: SET_SEARCH_STRING,
    payload: searchString
  }
}