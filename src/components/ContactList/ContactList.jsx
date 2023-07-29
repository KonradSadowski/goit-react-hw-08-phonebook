import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';
export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const delContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {filteredContacts.map(n => (
        <li key={n.id}>
          <button
            className={css.button}
            type="submit"
            onClick={() => delContact(n.id)}
          >
            Delete
          </button>
          {n.name}: {n.number}
        </li>
      ))}
    </ul>
  );
};
