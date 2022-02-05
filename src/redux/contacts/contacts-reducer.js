import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const items = createReducer([], {
  [actions.submitForm]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter((item) => item.id !== payload);
  },
});

const filter = createReducer("", {
  [actions.filter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
