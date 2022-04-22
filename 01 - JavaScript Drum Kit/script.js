"use strict"

window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stop running the function, if there is no corresponding audio file.

    audio.currentTime = 0; // rewind to the start
    audio.play();
    
    key.classList.add('playing');
};

const keys = this.document.querySelectorAll('.key');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));