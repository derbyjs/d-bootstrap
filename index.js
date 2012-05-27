var config = {
  ns: 'boot'
, filename: __filename
, styles: __dirname + '/node_modules/bootstrap/less/bootstrap'
, scripts: {
    dropdown: require('./dropdown')
  , modal: require('./modal')
  , tab: require('./tab')
  , tabs: require('./tabs')
  }
}

module.exports = boot
boot.decorate = 'derby'

function boot(derby, options) {
  derby.createLibrary(config, options)
}
