import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import style from '../App/App.module.css';

function App() {
  return (
    <Container>
      <h2 className={style.title}>Phone book</h2>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
