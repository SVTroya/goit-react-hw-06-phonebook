import { Contact } from '../Contact/Contact'
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled'
import { Filter } from '../Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts, getFilterValue } from '../../redux/selectors'
import { setFilterValue } from '../../redux/actions'

export function ListOfContacts() {
  const contacts = useSelector(getContacts)
  const filterValue = useSelector(getFilterValue)
  const dispatch = useDispatch()

  function onFilterInputChange(value) {
    dispatch(setFilterValue(value))
  }

  function getContactsItems(contacts, filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <ListWrapper>
      <HeaderContainer><h3>Contacts</h3>
        <Filter filter={filterValue} onChange={onFilterInputChange} /></HeaderContainer>
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
