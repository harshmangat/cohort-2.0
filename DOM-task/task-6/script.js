document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');


  const keyMap = {
    'q': 'C4',
    'w': 'D4',
    'e': 'E4',
    'r': 'F4',
    't': 'G4',
    'y': 'A4',
    'u': 'B4',
    'i': 'C5',
    // black keys
    '2': 'Cs4',
    '3': 'Ds4',
    '5': 'Fs4',
    '6': 'Gs4',
    '7': 'As4'
  };


  function playNote(note) {
    const pianoKey = document.querySelector(`.key[data-note="${note}"]`);

    if (!pianoKey) {
      console.log(`Piano key not found for note: ${note}`);
      return;
    }


    const audioPath = `./audio/${note}.mp3`;

    if (window.Audio) {
      const audio = new Audio(audioPath);
      audio.currentTime = 0;
      audio.play();
    } else {
      console.log('Audio playback is not supported in this browser.');
    }

    pianoKey.classList.add('active');

    setTimeout(() => {
      pianoKey.classList.remove('active');
    }, 150);
  }

  keys.forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      playNote(note);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.repeat) {
      return;
    }

    const pressedKey = event.key.toLowerCase();

    if (keyMap[pressedKey]) {
      const noteToPlay = keyMap[pressedKey];
      playNote(noteToPlay);
    }
  });
});