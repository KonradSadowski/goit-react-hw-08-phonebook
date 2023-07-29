import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './Contacts.module.css';
const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <div className={css.container}>
        <ContactForm />
        <div className={css.contactsDisplay}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
export default Contacts;
