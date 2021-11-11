import style from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={style.li}>
      <span>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={style.a}>
        {contact.number}
      </a>
      <button type="button" onClick={() => onDeleteContact(contact.id)} className={style.button}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
