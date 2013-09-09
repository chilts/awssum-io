// ----------------------------------------------------------------------------
//
// awssum.io - The AwsSum website.
//
// Copyright (c) Andrew Chilton, 2013.
//
// ----------------------------------------------------------------------------

// core
var http = require('http');
var path = require('path');

// npm
var express = require('express');

// local
var routes = require('./lib/routes.js');
var services = require('./lib/services.js');
var providers = require('./lib/providers.js');

// ----------------------------------------------------------------------------

var app = express();

// all environments
app.set('port', process.env.PORT || 9367);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/:provider', function(req, res, next) {
    // make sure this provider exists
    var provider = req.params.provider;
    var path = '/' + provider;
    if ( !providers[path] ) {
        return next();
    }

    var data = providers[path];
    res.render(data.page, {
        provider : data
    });

});

app.get('/:provider/:service', function(req, res, next) {
    // make sure this service exists
    var provider = req.params.provider;
    var service = req.params.service;

    var path = '/' + provider + '/' + service;

    if ( !services[path] ) {
        return next();
    }

    var data = services[path];
    res.render(data.page, {
        service : data
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// ----------------------------------------------------------------------------
