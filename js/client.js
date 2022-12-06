/* global TrelloPowerUp */
let Promise = TrelloPowerUp.Promise;
let onTimerStart = function (t, options) {
    // trigger update of timetable maybe?
}
let onTimerEnd = function (t, options) {
    // trigger update of timetable
    t.timer = new Event('timerEnd');
}

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
	    return [
            {
                icon: 'https://the-coding-owl.github.io/trello-test-app/icons/clock.svg',
                text: 'Tractime',
                callback: function(t) {
                    return t.popup({
                        title: "Tractime",
                        callback: onTimerEnd,
                        url: 'tracking.html',
                    });
                }
            }
        ];
    },
    'board-buttons': function(t, options) {
        let spent = 6;
        let estimate = 6.5;
        return [{
            icon: {
                dark: 'https://the-coding-owl.github.io/trello-test-app/icons/clock_inverse.svg',
                light: 'https://the-coding-owl.github.io/trello-test-app/icons/clock.svg'
            },
            text: 'Report S/E',
            url: 'https://demo.sgalinski.de',
            target: '_new'
        }, {
            icon: {
                darl: 'https://the-coding-owl.github.io/trello-test-app/icons/clock_inverse.svg',
                light: 'https://the-coding-owl.github.io/trello-test-app/icons/clock.svg'
            },
            text: `${spent}/${estimate}`,
            url: 'https://demo.sgalinski.de',
            target: '_new'
        }]
    },
    'card-back-section': function (t, options) {
        return {
            title: 'Tractime',
            icon: '',
            content: {
                type: 'iframe',
                url: t.signUrl('./timetable.html'),
                height: 230
            },
            action: {
                text: 'Report',
                callback: function(t) {
                    return t.popup({
                        title: "Tractime",
                        url: 'tracking.html',
                    });
                }
            }
        }
    }
});
