import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import style from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={style.div}>
      <ul>
        {contacts.map(contact => (
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
