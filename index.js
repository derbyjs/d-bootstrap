var fs = require('fs')
, path = require('path')
, exists = (fs && fs.existsSync) || (path && path.existsSync) || function (p) { return false; }
, lessRoot = exists(__dirname + '/node_modules/bootstrap') ?
  __dirname + '/node_modules/bootstrap/less/'
: __dirname + '/internal_bootstrap/less/'
, config = {
  ns: 'boot'
, filename: __filename
, scripts: {
    dropdown: require('./dropdown')
  , option: require('./dropdown/option')
  , modal: require('./modal')
  , tabs: require('./tabs')
  , tab: {}
  }
}

module.exports = function(app, options) {
  var outConfig = Object.create(config)

  var outStyles
  if (options && 'styles' in options) {
    var styles = options.styles
    if (typeof styles === 'string') styles = [styles]
    if (Array.isArray(styles)) {
      outStyles = []
      for (var i = 0, len = styles.length; i < len; i++) {
        outStyles.push(lessRoot + styles[i]) 
      }
    }
  } else {
    outStyles = lessRoot + 'bootstrap'
  }
  outConfig.styles = outStyles
  app.createLibrary(outConfig, options)
}
