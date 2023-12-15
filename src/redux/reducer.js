import { createReducer } from '@reduxjs/toolkit'
import { addContact, removeContact, setContacts, setFilterValue } from './actions'

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' }
]

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(setContacts, (state, action) => {
      return action.payload
    })
    .addCase(addContact, (state, action) => {
      state.push(action.payload)
    })
    .addCase(removeContact, (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload)
      state.splice(index, 1)
    })
})


const filterInitialState = ''

export const filterReducer = createReducer(filterInitialState, builder => {
  builder
    .addCase(setFilterValue, (state, action) => {
      console.log(state)
      console.log(action.payload)
      return action.payload
    })
})
