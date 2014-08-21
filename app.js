/*
 * NODE IS COOL. UGLY REDDIT.
 *
 */

var express = require('express');
var app = express(); //create app wrapper using express (this is why express makes node easier! all dat config)
var server = require('http').createServer(app); //generate a server from the app wrapper
var _ = require('underscore');
//USE THE SPECIAL ROUTING FILE!
require('./server/routes')(app);

//configure express to use jade
app.set('view engine', 'jade');

// serve all client contents statically
app.use('/client', express.static(__dirname + '/client')); //this tells node where to find the client's resources and junk

server.listen(9001, function()
{
	console.log('server started on port 9001');
});