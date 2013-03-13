var http = require('http')
  , path = require('path')
  , express = require('express')
  , gzippo = require('gzippo')
  , derby = require('derby')
  , app = require('../controller')
  , serverError = require('./serverError')

var expressApp = express(),
    server = http.createServer(expressApp)

var store = derby.createStore({listen: server});

module.exports = server;

var ONE_YEAR = 1000 * 60 * 60 * 24 * 365
    , ONE_WEEK = 1000 * 60 * 60 * 24 * 7
    , root = path.dirname(path.dirname(__dirname))
    , publicPath = path.join(root, 'public')

/**
 * (1)
 * Setup a hash of strategies you'll use - strategy objects and their configurations
 * Note, API keys should be stored as environment variables (eg, process.env.FACEBOOK_KEY, process.env.FACEBOOK_SECRET)
 * rather than a configuration file. We're storing it in conf.js for demo purposes.
 */
var
    auth = require('derby-auth')
  , strategies = {
      local: {
        strategy: new require('passport-local').Strategy,
        conf: {}
      }
    }

    // optional parameters passed into derby-auth.init, domain is required due to some Passport technicalities,
    // allowPurl lets people access non-authenticated accounts at /:uuid, and schema sets up default user
    // account schema structures
  , options = { domain: 'http://localhost:3000' }
  ;

auth.store(store);

expressApp
    .use(express.favicon())
    .use(gzippo.staticGzip(publicPath, {maxAge: ONE_WEEK}))
    .use(express.compress()).use(express.bodyParser())
    .use(express.methodOverride())
    .use(express.cookieParser())
    .use(store.modelMiddleware())
    .use(store.sessionMiddleware({
        secret: process.env.SESSION_SECRET || 'ooje2nohyee2Roh7aht7eapaiqueizeo5eighoey9daebeBei1fiecheich8iebi',
        cookie: {maxAge: ONE_WEEK}
    }))

    /**
     * (2)
     * derbyAuth.middleware is inserted after modelMiddleware and before the app router to pass server accessible data to a model
     * Pass in {store} (sets up accessControl & queries), {strategies} (see above), and options
     */
    .use(auth.middleware(strategies, options))

    .use(app.router())
    .use(expressApp.router)
    .use(serverError(root))
;

expressApp.all('*', function(req) {
  throw "404: " + req.url;
});

