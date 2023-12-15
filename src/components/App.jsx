import { ContactsBookContainer } from './App.styled'
import { NewContactForm } from './NewContactForm/NewContactForm'
import { ListOfContacts } from './ListOfContacts/ListOfContacts'
import storage from '../utils/storage.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContacts } from '../redux/actions'
import { getContacts } from '../redux/selectors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    const storageValue = storage.load(storage.KEY_CONTACTS)
    if (storageValue && storageValue?.length > 0) {
      dispatch(setContacts(storageValue))
    }
  }, [dispatch])

  useEffect(() => {
    storage.save(storage.KEY_CONTACTS, contacts)
  }, [contacts])

  return (
    <>
      <ContactsBookContainer>
        <NewContactForm />
        <ListOfContacts />
      </ContactsBookContainer>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        theme='colored' />
    </>
  )
}
