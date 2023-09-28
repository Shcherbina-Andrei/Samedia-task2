import { addElement } from './dom-operations.js';

export const loader = '<span class="loader"></span>';

export const addErrorMessage = (errorText) => addElement(errorText, 'p', 'error-message');

export const addSuccessMessage = (name) =>
  addElement(`${name}, Вы успешно авторизованы!`, 'p', 'success-message');
