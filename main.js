const secondCircle = document.getElementById("second");
const minuteCircle = document.getElementById("minute");
const hourCircle = document.getElementById("hour");

setInterval(setClock, 1000);

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds() * 6;
  const minutes = now.getMinutes() * 6;
  const hour = now.getHours() * 30;

  hourCircle.style.transform = `rotateZ(${hour + (minutes / 12)}deg)`;
  minuteCircle.style.transform = `rotateZ(${minutes}deg)`;
  secondCircle.style.transform = `rotateZ(${seconds}deg)`;
};
