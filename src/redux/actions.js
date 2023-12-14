import { createAction } from "@reduxjs/toolkit";

export const setContacts = createAction('contacts/setContacts')

export const addContact = createAction('contacts/addContact', contactData => {
  return {
    payload: {
      ...contactData,
      id: crypto.randomUUID()
    }
  }
})

export const removeContact = createAction('contacts/removeContact')

export const setFilterValue = createAction('filter/setFilterValue')
