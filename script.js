const buttons = document.querySelectorAll('button');
const infoBoxes = document.querySelectorAll('.info-box');
const translucentBackground = document.querySelector('.translucent-background');

translucentBackground.classList.add('hide-translucent-background');
document.documentElement.style.overflowY = 'auto';
document.documentElement.style.overflowX = 'hidden';

let prevItemClass = null;

function toggleInfoBox(itemClass) {
  try {
    const infoBox = document.getElementById(itemClass);
    infoBox.classList.toggle('hide-info-box');
    infoBox.classList.toggle('show-info-box');
    translucentBackground.classList.toggle('hide-translucent-background');
    toggleScrollBar();
    toggleEventListeners(itemClass);
  } catch (error) {
    console.error('An error occurred in toggleInfoBox(): ', error);
  }
}

function hideAllInfoBoxes() {
  try {
    infoBoxes.forEach((infoBox) => infoBox.classList.add('hide-info-box'));
  } catch (error) {
    console.error('An error occurred in hideAllInfoBoxes(): ', error);
  }
}

function handleKeyDown(event) {
  try {
    if (event.ctrlKey && event.key === 'z') {
      toggleInfoBox(prevItemClass);
    } else if (event.key === 'Escape') {
      toggleInfoBox(prevItemClass);
    }
  } catch (error) {
    console.error('An error occurred in handleKeyDown(): ', error);
  }
}

function toggleEventListeners(itemClass) {
  try {
    if (prevItemClass) {
      document.removeEventListener('keydown', handleKeyDown);
    }
    prevItemClass = itemClass;
    document.addEventListener('keydown', handleKeyDown);
  } catch (error) {
    console.error('An error occurred in toggleEventListeners(): ', error);
  }
}

function toggleScrollBar() {
  try {
    if (document.documentElement.style.overflowY === 'hidden') {
      document.documentElement.style.overflowY = 'auto';
    } else {
      document.documentElement.style.overflowY = 'hidden';
    }
  } catch (error) {
    console.error('An error occurred in toggleScrollBar(): ', error);
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    try {
      toggleInfoBox(button.classList[0]);
    } catch (error) {
      console.error('An error occurred in button click event listener: ', error);
    }
  });
});