var config = {
      ns: 'component' //<customize
    , filename: __filename
    , scripts: {
//        collect: require('./collect')
      }
    };

module.exports = component; //<customize
component.decorate = 'derby';

function component(derby, options) { //<<customize
  var outConfig = Object.create(config);
  derby.createLibrary(outConfig, options);
  return this;
}
