const analogSecond = document.getElementById("analog-second");
const analogMinute = document.getElementById("analog-minute");
const analogHour = document.getElementById("analog-hour");
const digitalSecond = document.getElementById("digital-second");
const digitalMinute = document.getElementById("digital-minute");
const digitalHour = document.getElementById("digital-hour");
const period = document.getElementById("period");

setInterval(setClock, 1000);

function setClock() {
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hour = now.getHours();

  analogHour.style.transform = `rotateZ(${hour * 30 + minutes / 12}deg)`;
  analogMinute.style.transform = `rotateZ(${minutes * 6}deg)`;
  analogSecond.style.transform = `rotateZ(${seconds * 6}deg)`;

  if (hour > 12) {
    hour = hour - 12;
  }
  digitalHour.innerHTML = hour < 10 ? `0${hour}` : hour;
  digitalMinute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  digitalSecond.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}
