/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
	    return [
            {
                icon: 'https://the-coding-owl.github.io/trello-test-app/icons/clock.svg',
                text: 'Tractime',
                callback: function(t) {
                    return t.popup({
                        title: "Tractime",
                        url: 'tracking_overview.html',
                    });
                }
            }
        ];
    }
});
