import { Form, FormWrapper } from './NewContactForm.styled'
import { addContact } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/selectors'

export function NewContactForm() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const nameInputId = crypto.randomUUID()
  const phoneInputId = crypto.randomUUID()

  function handleSubmit(ev) {
    ev.preventDefault()
    const { name, phone } = ev.target.elements
    if (contacts.some(({ name: contactName }) =>{
      console.log(contactName)
      console.log(name.value)
      return contactName === name.value
    })
    ) {
      alert(`${name.value} is already in contacts!`)
      return
    }
    dispatch(addContact({ name: name.value, phone: phone.value }))
    ev.target.reset()
  }

  function handleClick({ target }) {
    target.blur()
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type='text'
          name='name'
          id={nameInputId}
          placeholder='Enter name'
          required />
        <label htmlFor={phoneInputId}>Phone number</label>
        <input
          type='tel'
          name='phone'
          id={phoneInputId}
          placeholder='Enter phone number'
          required />
        <button type='submit' onClick={handleClick}>Add contact</button>
      </Form>
    </FormWrapper>
  )
}
