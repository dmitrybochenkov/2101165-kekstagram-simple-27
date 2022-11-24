const FILTER_PARAMETRES = [
  {
    filtername: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    cssstyle: 'grayscale',
  },
  {
    filtername: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    cssstyle: 'sepia',
  },
  {
    filtername: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    cssstyle: 'invert',
  },
  {
    filtername: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    cssstyle: 'blur',
  },
  {
    filtername: 'heat',
    min: 1,
    max: 3,
    step: 0.1,
    cssstyle: 'brightness',
  }
];

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');

const createSlider = (min, max, step, cssstyle) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    sliderValueElement.value = sliderElement.noUiSlider.get();
    image.style.filter = `${cssstyle}(${sliderValueElement.value})`;
    console.log(image.style.filter);
  });
};

const deleteSlider = () => {
  sliderElement.noUiSlider.destroy();
};

const onFilterChange = (evt) => {
  if (evt.target.type === 'radio') {
    FILTER_PARAMETRES.forEach((item) => {
      if (item.filtername === evt.target.value) {
        createSlider(item.min, item.max, item.step, item.cssstyle);
      }
    });
  }
};

effectsList.addEventListener('change', onFilterChange);
