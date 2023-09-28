export const addElement = (content, type, className) => {
  const newElement = document.createElement(type);
  newElement.innerHTML = content;
  newElement.className = className;
  return newElement;
};

export const removeElement = (element) => {
  if (element) {
    element.remove();
  }
};

export const replaceElementContent = (element, content) => {
  element.innerHTML = content;
};

export const toggleFormActivity = (form, isDisabled = false) => {
  const inputs = form.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = isDisabled;
  }

  const submitButton = form.querySelector('.authorization__button');
  submitButton.disabled = isDisabled;
};

