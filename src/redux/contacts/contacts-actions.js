import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const submitForm = createAction("app/SubmitForm", (payload) => ({
  payload: { id: shortid.generate(), ...payload },
}));
export const filter = createAction("app/Filter");
export const deleteContact = createAction("app/DeleteContact");
