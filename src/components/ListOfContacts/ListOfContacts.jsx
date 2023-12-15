import { Contact } from '../Contact/Contact'
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled'
import { Filter } from '../Filter/Filter'
import { useSelector } from 'react-redux'
import { getContacts, getFilterValue } from '../../redux/selectors'

export function ListOfContacts() {
  const contacts = useSelector(getContacts)
  const filterValue = useSelector(getFilterValue)

  function getContactsItems(contacts, filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <ListWrapper>
      <HeaderContainer><h3>Contacts</h3>
        <Filter /></HeaderContainer>
      <ul>
        {getContactsItems(contacts, filterValue).map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </ListWrapper>
  )
}
