const buttons = document.querySelectorAll('button');
const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach((infoBox) => infoBox.classList.add('hide-info-box'))
document.documentElement.style.overflowY = 'auto';
document.documentElement.style.overflowX = 'hidden';

function toggleInfoBox(itemClass) {
  const infoBox = document.getElementById(itemClass);
  infoBox.classList.toggle('hide-info-box')
  infoBox.classList.toggle('show-info-box')
  toggleScrollBar();
}

function hideAllInfoBoxes() {
  infoBoxes.forEach((infoBox) => infoBox.classList.add('hide-info-box'))
}

function toggleScrollBar() {
  if (document.documentElement.style.overflowY == 'hidden') {
    document.documentElement.style.overflowY = 'auto';
  }
  else {
    document.documentElement.style.overflowY = 'hidden'
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => toggleInfoBox(button.classList[0]))
})