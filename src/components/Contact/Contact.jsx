import { IconWrapper, Name, Phone } from './Contact.styled'
import PropTypes from 'prop-types'
import { ImBin } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../redux/contactsSlice'

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
}

export function Contact({ contact: { id, name, phone } }) {
  const dispatch = useDispatch()

  function handleRemoveContact(id) {
    dispatch(removeContact(id))
  }

  return (
    <>
      <Name>{name}</Name>
      <Phone>tel.:{phone}</Phone>
      <IconWrapper>
        <ImBin size={20} onClick={() => handleRemoveContact(id)} />
      </IconWrapper>
    </>
  )
}
