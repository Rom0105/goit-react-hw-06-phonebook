import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import style from '../App/App.module.css';
import ContactsJson from '../../json/contacts.json';

function App() {
  const [contacts, setContacts] = useState(ContactsJson);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    data.id = nanoid();
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    if (contacts) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
  };

  return (
    <Container>
      <h2 className={style.title}>Phone book</h2>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <h2 className={style.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;
