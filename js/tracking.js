const t = TrelloPowerUp.iframe();
const timeElement = window.tracker.querySelector('input');
const buttonElement = window.tracker.querySelector('button');
let timer = null;
let time = 0;
const startClock = function () {
    if (timer !== null) {
        console.log('Clock Stopped');
        clearInterval(timer);
        timer = null;
        timeElement.value = '00:00';
        buttonElement.textContent = 'Start';
    } else {
        console.log('Clock Started');
        timer = setInterval(() => {
            let minutes = parseInt(time / 60, 10);
            let seconds = parseInt(time % 60, 10);
            timeElement.value = `${minutes}`.padStart(2,'0') + ':' + `${seconds}`.padStart(2,'0');
            time += 1;
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