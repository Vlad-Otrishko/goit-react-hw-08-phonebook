import { useEffect } from 'react';
import contactsSelectors from '../../redux/contacts/contacts-selectors'
import { useSelector, useDispatch } from 'react-redux';
import { readContacts, deleteContacts } from '../../redux/contacts/contacts-operations';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';


const ContactList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readContacts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  );

  const visibleList = useSelector(state=>contactsSelectors.getVisible(state));

    return (
      <ul className={s.list}>
        {visibleList.map(item => (
          <li key={item.id} className={s.line}>
            <Contact
              name={item.name}
              number={item.number}
            />
            <button
              type="button"
              className={s.deleteButton}
              onClick={() => dispatch(deleteContacts(item.id))}
            ></button>
          </li>
        ))}
      </ul>
    );

};

export default ContactList;

