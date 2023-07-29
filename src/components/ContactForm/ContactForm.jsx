import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';
export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <div className={css.form}>
      <form className={css.formItem} onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="John Doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number</span>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          placeholder="123 456 789"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.formBtn}>Add contact</button>
      </form>
    </div>
  );
};
