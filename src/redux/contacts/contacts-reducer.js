import { combineReducers } from "redux";
import { FILTER, SUBMIT_FORM, DELETE_CONTACTS } from "./contacts-types.js";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case SUBMIT_FORM:
      return [...state, payload];

    case DELETE_CONTACTS:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
