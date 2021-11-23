import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { addContacts } from '../../redux/contacts/contacts-operations';
import shortid from 'shortid';
import s from './ContactForm.module.css';

function isUnique(phonebookRecords, newRecord) {
  const normalizedNewName = newRecord.toLowerCase();
  return !phonebookRecords.some(
    ({ name }) => name.toLowerCase() === normalizedNewName,
  );
}


const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const savedRecords = useSelector(state => state.contacts.items);
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default: return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(savedRecords, 'name=', name);
    if (!isUnique(savedRecords, name)) {
      alert('THIS NAME IS ALREADY PRESENT IN A PHONEBOOK');
      return;
    }
   dispatch(addContacts({ name, number}));
    reset();
  };
  const reset = () => {
      setName('');
      setNumber('');
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.wrapper}>
          <label htmlFor={nameInputId}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={nameInputId}
              value={name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor={numberInputId}>
            Phone Number
            <input
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={numberInputId}
              value={number}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className={s.submitButton } type="submit">Add contact</button>
      </form>
    );
}
export default ContactForm;

