// The create function is called after the component is created
// and has been added to the DOM. It only runs in the browser
exports.create = function(model, dom) {
}

// The init function is called on both the server and browser
// before rendering
exports.init = function(model) {
  var thumbnails = this.thumbnails = model.at('thumbnails');
  var current = this.current = model.at('current');
  this.on('init:child', function(child, type) {
    if (type == 'lib:thumbnail') {
      var childModel = child.model
        , data_src = childModel.get('data_src')
        , alt = childModel.get('alt')
        , cell_size = childModel.get('cell_size')
        , label = childModel.get('label')
        , caption = childModel.get('content')
      thumbnails.push({data_src: data_src, alt: alt, cell_size: cell_size, label: label, caption: caption, model: childModel})
      this.select()
    }
  })
}

exports.select = function(data_src) {
  this.current.set(data_src);
}

exports.clickThumbnail = function(e, el) {
  this.select(this.model.at(el).get('data_src'));
}