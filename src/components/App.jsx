import { ContactsList } from './App.styled';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { ListOfContacts } from './ListOfContacts/ListOfContacts';
import storage from '../utils/storage.js';
import { useEffect, useState } from 'react';

export function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storageValue = storage.load(storage.KEY_CONTACTS);
    setContacts(storageValue || []);
  }, []);

  useEffect(() => {
    storage.save(storage.KEY_CONTACTS, contacts);
  }, [contacts]);

  function onSubmitForm(id, name, phone) {
    setContacts(prev => [...prev, { id, name, phone }]);
  }

  function onRemoveContact(id) {
    setContacts(prev => prev.filter(contactInfo => contactInfo.id !== id));
  }

  return (
    <ContactsList>
      <NewContactForm
        contacts={contacts}
        onSubmit={onSubmitForm}
      />
      <ListOfContacts
        contacts={contacts}
        onRemoveContact={onRemoveContact} />
    </ContactsList>
  );
}
