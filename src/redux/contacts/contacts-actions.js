import { createAction } from '@reduxjs/toolkit';


 export const filterItems = createAction('contacts/changeFilter');
export const resetState = createAction('contacts/reset');
