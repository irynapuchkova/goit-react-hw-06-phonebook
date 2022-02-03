import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const submitForm = createAction(
  "app/SubmitForm",
  ({ name, number }) => ({
    payload: { id: shortid.generate(), name, number },
  })
);
export const filter = createAction("app/Filter");
export const deleteContact = createAction("app/DeleteContact");
