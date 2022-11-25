const FILTER_PARAMETRES = [
  {
    filtername: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    cssstyle: 'none',
  },
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
  },
];

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const updateSlider = (min, max, step) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    step: step,
  });
  sliderElement.noUiSlider.set(max);
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const addSlider = (evt) => {
  FILTER_PARAMETRES.forEach((item) => {
    if (item.filtername === evt.target.value) {
      switch (item.filtername) {
        case 'none':
          hideSlider();
          image.style.filter = item.cssstyle;
          break;
        case 'chrome':
          updateSlider(item.min, item.max, item.step);
          sliderElement.noUiSlider.on('update', () => {
            sliderValueElement.value = sliderElement.noUiSlider.get();
            image.style.filter = `${item.cssstyle}(${sliderValueElement.value})`;
          });
          break;
        case 'sepia':
          updateSlider(item.min, item.max, item.step);
          sliderElement.noUiSlider.on('update', () => {
            sliderValueElement.value = sliderElement.noUiSlider.get();
            image.style.filter = `${item.cssstyle}(${sliderValueElement.value})`;
          });
          break;
        case 'marvin':
          updateSlider(item.min, item.max, item.step);
          sliderElement.noUiSlider.on('update', () => {
            sliderValueElement.value = sliderElement.noUiSlider.get();
            image.style.filter = `${item.cssstyle}(${sliderValueElement.value}%)`;
          });
          break;
        case 'phobos':
          updateSlider(item.min, item.max, item.step);
          sliderElement.noUiSlider.on('update', () => {
            sliderValueElement.value = sliderElement.noUiSlider.get();
            image.style.filter = `${item.cssstyle}(${sliderValueElement.value}px)`;
          });
          break;
        case 'heat':
          updateSlider(item.min, item.max, item.step);
          sliderElement.noUiSlider.on('update', () => {
            sliderValueElement.value = sliderElement.noUiSlider.get();
            image.style.filter = `${item.cssstyle}(${sliderValueElement.value})`;
          });
          break;
      }
    }
  });
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});
hideSlider();

export {addSlider};
