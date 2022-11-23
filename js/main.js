import {setFormSubmit, closeModalWindow} from './form.js';
import {loadPhotos} from './posted-photos.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import './slider.js';

getData(
  (photos) => loadPhotos(photos),
  () => showAlert('Не загрузились изображения с сервера, попробуйте обновить страницу.'),
);

setFormSubmit(closeModalWindow);
