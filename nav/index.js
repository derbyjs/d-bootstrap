exports.init = function(model) {
  var nav = this.nav = model.at('nav')
    , current = this.current = model.at('current')
    , type = this.type = model.get('type')
    , brand = this.brand = model.get('brand')

  //console.log('nav:' + type + model.get('content'));

  this.on('init:child', function(child, type) {
    console.log(type);
    if (type == 'lib:tab_pane') {
      var childModel = child.model
        , name = childModel.get('name') || nav.get('length') || 0
        , title = childModel.get('title')
        , header = childModel.get('header')
      nav.push({name: name, title: title, header: header, model: childModel})
      //console.log({name: name, title: title, header: header});
      this.select()
    } else if (type == 'lib:link') {
      var childModel = child.model
        , name = childModel.get('name') || nav.get('length') || 0
        , disabled = childModel.get('disabled')
        , header = childModel.get('header')
      nav.push({name: name, header: header, disabled: disabled, model: childModel});
      console.log('link',{name: name, header: header, disabled: disabled});
    } else if (type == 'lib:page') {
      var childModel = child.model
        , name = childModel.get('name') || nav.get('length') || 0
        , disabled = childModel.get('disabled')
        , header = childModel.get('header')
      nav.push({name: name, header: header, disabled: disabled, model: childModel})
    } else {
      return;
    }
  })

  current.on('set', function(name) {
    var items = nav.get()
      , i = items && items.length
      , tab_content
    while (i--) {
      tab_content = items[i]
      tab_content.model.set('active', tab_content.name == name)
    }
  })
}

exports.select = function(name) {
  if (name == null) name = this.current.get();
  if (name == null) name = this.nav.get('0.name');
  this.current.set(name);
}

exports._clickNav = function(e, el) {
  this.select(this.model.at(el).get('name'));
}
exports.clickBrand = function(e, el) {
  console.log('[dev] branding without connected callback');
}
