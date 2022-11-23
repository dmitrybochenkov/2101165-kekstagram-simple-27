const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const img = document.querySelector('.img-upload__preview img');

sliderValueElement.value = 1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();
  effectsList.addEventListener('change', (evt) => {
    if (evt.target.type === 'radio') {
      switch (evt.target.value) {
        case 'chrome':
          img.style.filter = `grayscale(${sliderValueElement.value})`;
          console.log(img.style.filter);
          break;
      }
    }
  });
});

// const modifySlider = (evt) => {
//   if (evt.target.type === 'radio') {
//     switch (evt.target.value) {
//       case 'chrome':
//         img.style.filter = `grayscale(${sliderValueElement.value})`;
//         console.log(img.style.filter);
//         break;
//       case 'sepia':
//
//         break;
//       case 'marvin':
//
//         break;
//       case 'phobos':
//
//         break;
//       case 'heat':
//
//         break;
//       default:
//
//     }
//   }
// };

// effectsList.addEventListener('change', modifySlider);

// img.style.filter = `grayscale(${sliderValueElement.value})`;
// console.log(img.style.filter);
