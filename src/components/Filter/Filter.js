import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filterItems} from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
    return(
    <label className={s.filterLabel}>
        Search by name
        <input type="text" className={s.filter} value={value}
          onChange={(event) => dispatch(filterItems(event.currentTarget.value))}
        />
        </label>
        )
}


export default Filter;

