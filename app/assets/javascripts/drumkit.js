const addEffect = function(keyCode) {
  myTab = document.querySelector(`div[data-key='${keyCode}']`);
  if (myTab === null) { return false; }
  myTab.classList.add('playing');
  setTimeout(function() {
    myTab.classList.remove('playing');
  }, 150);
  return true;
}

const playSound = function(keyCode, alreadyPlayed) {
  mySound = document.querySelector(`audio[data-key='${keyCode}']`);
  if (alreadyPlayed) { mySound = mySound.cloneNode(true) };
  return mySound.play();
}

function drumkit() {
  const drumtabs = document.querySelectorAll("div[data-key]");
  const audios = document.querySelectorAll("audio[data-key]");
  const playingSounds = {};
  document.addEventListener('keydown', function(event) {
    drumtabs.forEach(function(tab) { tab.classList.remove('playing'); });
    const keyCode = event.key.toUpperCase().charCodeAt();
    if (!addEffect(keyCode)) { return null; };
    alreadyPlayed = false;
    if (playingSounds[keyCode]) {
      alreadyPlayed = true;
      playingSounds[keyCode].then(function() {
        alreadyPlayed = false;
      })
    };
    playingSounds[keyCode] = playSound(keyCode, alreadyPlayed);
  });
}

function startScript() {
  const identifier = document.body.firstElementChild.id;

  if (identifier === 'drumkit') { drumkit(); };
}

window.addEventListener('load', startScript);
