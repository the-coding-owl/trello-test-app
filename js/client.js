/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
	    return [
            {
                icon: 'https://the-coding-owl.github.io/trello-test-app/icons/clock.svg',
                text: 'TrackTime',
                callback: function(t) {
                    return t.popup({
                        title: "Estimation",
                        url: 'estimate.html',
                    });
                }
            }
        ];
    }
});
