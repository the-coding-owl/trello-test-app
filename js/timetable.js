const t = TrelloPowerUp.iframe();
const render = () => {
    t.render(function() {
        // render table
        t.sizeTo('#timetable').done();
    });
}

t.timer.addEventListener('timerEnd', (e) => {
    render();
});

render();