var reddit = require('./reddit');
var _ = require('underscore');

module.exports = function(app){ //pass in the app so you can do some routing stuff
	app.get('/', function(req, res) { //this is a route handler
		reddit.get_kittens_from_reddit(function(results) {
			//ONLY GRAB PICS
			var raw_results = JSON.parse(results);
			var important_kitten_data = _.pluck(raw_results.data.children, "data");
			var kitten_pics = _.pluck(important_kitten_data, "url");
			kitten_pics = _.filter(kitten_pics, function(kitten) { //filter out non-pics
				return new RegExp(".jpg|.jpeg|.png").test(kitten)
			});

			res.render('home', {
				kittens: kitten_pics
			});
		});
	});

	app.get('/ugly', function(req, res) { //this is another route handler
		res.render('ugly');
	});
}