import shortid from "shortid";

import { DELETE_CONTACTS, FILTER, SUBMIT_FORM } from "./contacts-types";

export const submitForm = ({ name, number }) => ({
  type: SUBMIT_FORM,
  payload: { id: shortid.generate(), name, number },
});

export const filter = (value) => ({
  type: FILTER,
  payload: value,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACTS,
  payload: id,
});
