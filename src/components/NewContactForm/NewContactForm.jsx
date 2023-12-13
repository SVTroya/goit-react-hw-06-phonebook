import { Form, FormWrapper } from './NewContactForm.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

NewContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  })),
  onSubmit: PropTypes.func,
};

export function NewContactForm({ contacts, onSubmit }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = crypto.randomUUID();
  const phoneInputId = crypto.randomUUID();

  function handleSubmit(ev) {
    ev.preventDefault();
    if (contacts.some(({ name: contactName }) => contactName === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    onSubmit(crypto.randomUUID(), name, phone);
    setName('');
    setPhone('');
  }

  function handleClick({ target }) {
    target.blur();
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type='text'
          name='name'
          id={nameInputId}
          value={name}
          placeholder='Enter name'
          onChange={(ev) => setName(ev.target.value)}
          required />
        <label htmlFor={phoneInputId}>Phone number</label>
        <input
          type='tel'
          name='phone'
          id={phoneInputId}
          value={phone}
          placeholder='Enter phone number'
          onChange={(ev) => setPhone(ev.target.value)}
          required />
        <button type='submit' onClick={handleClick}>Add contact</button>
      </Form>
    </FormWrapper>
  );
}
