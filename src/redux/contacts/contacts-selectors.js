import { createSelector } from "@reduxjs/toolkit";

const contacts = (state) => state.contacts.items;
const filter = (state) => state.contacts.filter;
const filteredContacts = createSelector(contacts, filter, (items, filter) => {
  const normalisedFilter = filter.toLowerCase();

  return items.filter((item) =>
    item.name.toLowerCase().includes(normalisedFilter)
  );
});

const selectors = {
  contacts,
  filter,
  filteredContacts,
};

export default selectors;
