import { ErrorMessage, Form, FormWrapper, InputWrapper } from './NewContactForm.styled'
import { addContact } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/selectors'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function NewContactForm() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  function onSubmit(data) {
    const { nameInput, phoneInput } = data
    if (contacts.some(({ name }) => {
      return name === nameInput
    })
    ) {
      toast.warn(`${nameInput} is already in contacts!`)
      return
    }
    dispatch(addContact({ name: nameInput, phone: phoneInput }))
    reset()
  }

  function handleClick({ target }) {
    target.blur()
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <span>Name</span>
          <input
            {...register('nameInput', {
              required: 'Name is required!',
              minLength: { value: 2, message: 'Name must be at least 2 symbols long!' }
            })}
            placeholder='Enter name' />
          {errors.nameInput && <ErrorMessage>{errors.nameInput.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <span>Phone number</span>
          <input
            type='tel'
            {...register('phoneInput', {
              required: 'Phone number is required!',
              minLength: { value: 9, message: 'Phone number is too short!' }
            })}
            placeholder='Enter phone number' />
          {errors.phoneInput && <ErrorMessage>{errors.phoneInput.message}</ErrorMessage>}
        </InputWrapper>
        <button type='submit' onClick={handleClick}>Add contact</button>
      </Form>
    </FormWrapper>
  )
}
