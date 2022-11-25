const image = document.querySelector('.img-upload__preview img');
const filterList = document.querySelector('.effects__list');

const filterReset = () => {
  image.removeAttribute('class');
};

const onFilterChange = (evt) => {
  if (evt.target.type === 'radio') {
    filterReset();
    image.classList.add(`effects__preview--${evt.target.value}`);
  }
};

filterList.addEventListener('change', onFilterChange);

export {filterReset};
