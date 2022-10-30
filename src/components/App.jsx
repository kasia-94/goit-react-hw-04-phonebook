import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Section } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  function addContact(newContact) {
    if (contacts.map(contact => contact.name).includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  }

  function showContact() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={showContact()} onDeleteContact={deleteContact} />
    </Section>
  );
}
