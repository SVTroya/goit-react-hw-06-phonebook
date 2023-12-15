import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const KEY_CONTACTS = 'contacts';

const persistConfig = {
  key: KEY_CONTACTS,
  storage,
  whitelist: ['contacts']
}

const reducer = combineReducers({ contacts: contactsReducer, filter: filterReducer })
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, })
})
export const persistor = persistStore(store)

