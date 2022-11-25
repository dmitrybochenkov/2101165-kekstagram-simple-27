import {setFormSubmit, closeModalWindow} from './form.js';
import {loadPhotos} from './posted-photos.js';
import {showAlert} from './util.js';
import {getData} from './api.js';

const failMessage = 'Не загрузились изображения с сервера, попробуйте обновить страницу.';

getData(
  (photos) => loadPhotos(photos),
  () => showAlert(failMessage),
);

setFormSubmit(closeModalWindow);
