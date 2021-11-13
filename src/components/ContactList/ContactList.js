import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contact-actions';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const getVisibleContact = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContact(items, filter),
  );

  const dispatch = useDispatch();
  return (
    <div className={style.div}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={style.items}>
            {name}:<span className={style.number}>{number}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
