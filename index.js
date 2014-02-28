module.exports = function(app, options) {
  app.component(require('./dropdown'));
  app.component(require('./modal'));
  app.component(require('./tabs'));
  app.loadStyles(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min');
};
