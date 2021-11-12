import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../Redux/contact-selectors';
import { deleteContact } from '../../Redux/contact-actions';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContacts = id => dispatch(deleteContact(id));
  return (
    <div className={style.div}>
      <ul>
        {contacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              {name}: {phone}
              <button type="button" onClick={() => onDeleteContacts(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
