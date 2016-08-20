module.exports = function(app, options) {
  app.component(require('./dropdown'));
  app.component(require('./modal'));
  app.component(require('./tabs'));
  app.component(require('./alert'));
  app.component(require('./contextMenu'));
  if(!options || (options && options.loadStyles)) app.loadStyles(require.resolve('bootstrap/dist/css/bootstrap.min.css'));
};
