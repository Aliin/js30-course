function setTime(hours, mins, secs) {
  const time = new Date();
  positions = [
    (90 + time.getSeconds() * 6),
    (90 + time.getMinutes() * 6),
    (time.getHours() % 12), (90 + time.getHours() * 30),
  ]
  secs.style.transform = `rotate(${positions[0]}deg)`
  mins.style.transform = `rotate(${positions[1]}deg)`
  hours.style.transform = `rotate(${positions[2]}deg)`
}

function clock() {
  const hours = document.querySelector('.hour-hand');
  const mins = document.querySelector('.min-hand');
  const secs = document.querySelector('.second-hand');

  setTime(hours, mins, secs);
  setInterval(function() { setTime(hours, mins, secs, positions) }, 1000);
}

function startScript() {
  const identifier = document.body.firstElementChild.id;

  if (identifier === 'clock') { clock(); };
}

window.addEventListener('load', startScript);
