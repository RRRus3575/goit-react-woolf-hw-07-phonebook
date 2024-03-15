import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contacts;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
export const getFilter = (state) => state.filter.filter;
export const contactsSelector = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    const cont = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return cont;
  }
);
