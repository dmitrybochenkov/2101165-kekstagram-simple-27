import {isEscapeKey, elementClean} from './util.js';
import {scaleImage} from './scale.js';
import {filterReset} from './filter.js';
import {sendData} from './api.js';
import {showErrorMessage} from './error-message.js';
import {showSuccessMessage} from './success-message.js';

const form = document.querySelector('.img-upload__form');
const modalWindow = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const imgUploadElement = document.querySelector('.img-upload__input');
const commentElement = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const imageUploadLabel = document.querySelector('.img-upload__label');

const onModalWindowEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalWindow.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    elementClean(imageUploadLabel);
    imgUploadElement.value = '';
    commentElement.value = '';

    document.removeEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const openModalWindow = (evt) => {
  if (evt.target.type === 'file') {
    modalWindow.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    scaleImage();
    filterReset();

    document.addEventListener('keydown', onModalWindowEscapeKeydown);
  }
};

const closeModalWindow = () => {
  modalWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadElement.value = '';
  commentElement.value = '';
  elementClean(imageUploadLabel);

  document.removeEventListener('keydown', onModalWindowEscapeKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    blockSubmitButton();

    sendData(
      () => {
        onSuccess();
        elementClean(imageUploadLabel);
        unblockSubmitButton();
        showSuccessMessage();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  });
};

form.addEventListener('change', openModalWindow);

closeButton.addEventListener('click', closeModalWindow);

export {setFormSubmit, closeModalWindow, onModalWindowEscapeKeydown};
