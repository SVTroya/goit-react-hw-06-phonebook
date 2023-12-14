import { ContactsList } from './App.styled'
import { NewContactForm } from './NewContactForm/NewContactForm'
import { ListOfContacts } from './ListOfContacts/ListOfContacts'
import storage from '../utils/storage.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContacts } from '../redux/actions'
import { getContacts } from '../redux/selectors'

export function App() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    const storageValue = storage.load(storage.KEY_CONTACTS)
    if (storageValue && storageValue?.length > 0) {
      dispatch(setContacts(storageValue))
    }
  }, [])

  useEffect(() => {
    storage.save(storage.KEY_CONTACTS, contacts)
  }, [contacts])

  return (
    <ContactsList>
      <NewContactForm />
      <ListOfContacts />
    </ContactsList>
  )
}
