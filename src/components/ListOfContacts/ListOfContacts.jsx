import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled';
import { Filter } from '../Filter/Filter';
import { useState } from 'react';

ListOfContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  ),
  onRemoveContact: PropTypes.func,
};

export function ListOfContacts({ contacts, onRemoveContact }) {

  const [filterValue, setFilterValue] = useState('');

  function onFilterInputChange(value) {
    setFilterValue(value)
  }

  function getContactsItems(contacts, filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onRemoveContact={onRemoveContact} />
        </li>
      ));
  }

  return (
    <ListWrapper>
      <HeaderContainer><h3>Contacts</h3>
        <Filter filter={filterValue} onChange={onFilterInputChange} /></HeaderContainer>
      <ul>
        {getContactsItems(contacts, filterValue)}
      </ul>
    </ListWrapper>
  );
}
