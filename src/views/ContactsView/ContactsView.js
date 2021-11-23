import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import s from './ContactsView.module.css';

const ContactsView = () => { 
    return (
    <div className={s.container}>
      <h1 className={s.headline}>Phone book</h1>
      <ContactForm />
      <h2 className={s.headline}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsView;