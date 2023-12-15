import { ContactsBookContainer } from './App.styled'
import { NewContactForm } from './NewContactForm/NewContactForm'
import { ListOfContacts } from './ListOfContacts/ListOfContacts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
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
