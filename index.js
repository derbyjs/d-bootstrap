module.exports = function(app, options) {
  app.component(require('./dropdown'));
  app.component(require('./modal'));
  app.component(require('./tabs'));
  app.component(require('./alert'));
  app.component(require('./contextMenu'));
  app.loadStyles(__dirname + '/css/bootstrap.min');
};
