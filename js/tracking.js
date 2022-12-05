const t = TrelloPowerUp.iframe();
const timeElement = window.tracker.querySelector('input');
const buttonElement = window.tracker.querySelector('button');
let timer = null;
let time = 0;
const startClock = function () {
    console.log('Clock Started');
    if (timer !== null) {
        timer = null;
        timeElement.value = '00:00';
        buttonElement.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            let minutes = parseInt(time / 60, 10);
            let seconds = parseInt(time % 60, 10);
            timeElement.value = parseString(minutes).padStart(2,'0') + parseString(seconds).padStart(2,'0');
        }, 1000);
        buttonElement.textContent = 'End';
    }
    
};

window.tracker.addEventListener('submit', function(e) {
    e.preventDefault();
    startClock();
    return ;   
});

t.render(function () {
    t.sizeTo('#tracker').done();
});