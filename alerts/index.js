// The create function is called after the component is created
// and has been added to the DOM. It only runs in the browser
exports.create = function(model, dom) {
}

// The init function is called on both the server and browser
// before rendering
exports.init = function(model) {
  var text = model.get('content');
  if ( text && text.length > 150 )
     model.set('long_text',true)
}


