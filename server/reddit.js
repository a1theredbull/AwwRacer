var http = require('http');

exports.get_kittens_from_reddit = function(callback) {
	var options = {
  		host: "www.reddit.com",
  		path: '/r/aww/hot.json?q=kittens&sort=new&limit=15',
  		method: 'GET',
  		headers: { 
  			'Content-Type' : 'application/json' 
  		}
	};

	var req = http.request(options, function(res) {
		var data = "";
		var i = 0;

		res.on('data', function(results) {
			data += results;
		});

		res.on('end', function() {
			callback(data);
		});
	});

	req.end();
}