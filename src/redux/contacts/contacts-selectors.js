import { createSelector } from 'reselect';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisible = createSelector(
    [getItems, getFilter],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
        
    }
);





// eslint-disable-next-line import/no-anonymous-default-export
export default { getItems, getFilter,getVisible };