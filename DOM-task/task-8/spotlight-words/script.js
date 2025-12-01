let para = document.querySelector('p')
let characters = 'ABCDEFGHIJKLMNOPQRSTUVVWXYZabcdefghijklmnopqrstuvwxyz'
let text = para.innerText;

let iteration = 0


function randomText() {
  let str = text.split('').map((char, idx) => {
    if (idx < iteration) {
      return char
    }

    return characters.split("")[Math.floor(Math.random() * 52)]
  }).join('')

  para.innerText = str

  iteration += 0.3
}


setInterval(randomText, 30)


addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--x', e.clientX + 'px')
  document.body.style.setProperty('--y', e.clientY + 'px')
})


const box = document.querySelector('.box');
if (!para || !box) throw new Error('Missing .box or p element');

let scrambleInterval = null;
let frame = 0;
const duration = 1200; // ms
const tick = 40; // ms per frame
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
const original = para.textContent;

function setXY(e) {
  const rect = para.getBoundingClientRect();
  const x = (e.clientX - rect.left) + 'px';
  const y = (e.clientY - rect.top) + 'px';
  para.style.setProperty('--x', x);
  para.style.setProperty('--y', y);
}

function startScramble() {
  clearInterval(scrambleInterval);
  frame = 0;
  const totalFrames = Math.max(1, Math.ceil(duration / tick));
  scrambleInterval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    let out = '';
    for (let i = 0; i < original.length; i++) {
      if (original[i] === ' ') {
        out += ' ';
        continue;
      }

      if (Math.random() < progress) {
        out += original[i];
      } else {
        out += letters[Math.floor(Math.random() * letters.length)];
      }
    }
    para.textContent = out;

    if (frame >= totalFrames) {
      clearInterval(scrambleInterval);
      para.textContent = original;
    }
  }, tick);
}

function stopScramble() {
  clearInterval(scrambleInterval);
  para.textContent = original;
}

function enter(e) {
  para.classList.add('active');
  setXY(e);
  startScramble();
  para.addEventListener('mousemove', setXY);
}

function leave() {
  para.classList.remove('active');
  para.removeEventListener('mousemove', setXY);
  stopScramble();
}


para.addEventListener('mouseenter', enter);
para.addEventListener('mouseleave', leave);
