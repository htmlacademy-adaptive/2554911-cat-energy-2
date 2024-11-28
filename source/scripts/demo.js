const slider = document.querySelector('.demo');
const curtain = slider.querySelector('.demo__curtain');
const sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

slider.classList.remove('demo--nojs');
curtain.classList.remove('demo__curtain--nojs');

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = Number(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
