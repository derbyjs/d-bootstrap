var lessRoot = __dirname + '/node_modules/bootstrap/less/'
  , config = {
      ns: 'boot'
    , filename: __filename
    , scripts: {
        dropdown: require('./dropdown')
      , modal: require('./modal')
      , tabs: require('./tabs')
      , tab: {}
      }
    }

module.exports = boot
boot.decorate = 'derby'

function boot(derby, options) {
  var outConfig = Object.create(config)
    , styles = options && options.styles
    , outStyles, i, len, style

  if (styles) {
    outStyles = []
    for (i = 0, len = styles.length; i < len; i++) {
      outStyles.push(lessRoot + styles[i]) 
    }
  } else {
    outStyles = lessRoot + 'bootstrap'
  }
  outConfig.styles = outStyles
  derby.createLibrary(outConfig, options)
  return this
}
