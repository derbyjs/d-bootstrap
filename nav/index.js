exports.init = function(model) {
  var nav = this.nav = model.at('nav')
    , current = this.current = model.at('current')

  this.on('init:child', function(child, type) {
    if (type !== 'lib:tab_content') return
    var childModel = child.model
      , name = childModel.get('name') || nav.get('length') || 0
      , title = childModel.get('title')
    nav.push({name: name, title: title, model: childModel})
    this.select()
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
  if (name == null) name = this.current.get()
  if (name == null) name = this.nav.get('0.name')
  this.current.set(name)
}

exports._clickNav = function(e, el) {
  this.select(this.model.at(el).get('name'))
}
