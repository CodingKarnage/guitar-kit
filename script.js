

window.addEventListener('keydown', addClass);
window.addEventListener('keyup', removeClass);

function playSound(e){
    
};

function addClass(e){
    const note = document.querySelector(`.note[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio || !note)
        return;
    
    
    note.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
};

function removeClass(e){
    const note = document.querySelector(`.note[data-key="${e.keyCode}"]`);
    if(!note)
        return;

    note.classList.remove('playing');
};