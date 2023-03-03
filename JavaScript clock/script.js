setInterval(setClock, 1000);

const secondsHand = document.querySelector('[data-seconds-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
  const currentTime = new Date();
  
  const secondsRatio = currentTime.getSeconds() / 60;
  const minuteRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentTime.getHours()) / 12;

  ratio(secondsHand, secondsRatio);
  ratio(minuteHand, minuteRatio);
  ratio(hourHand, hourRatio);
}
function ratio(element, rotateRatio) {
  element.style.setProperty('--rotation', rotateRatio * 360)
}
setClock()