exports.init = function(model) {
  var tabs = model.at('tabs')
    , current = model.at('current')

  this.on('init:child', function(child) {
    var childModel = child.model
      , name = childModel.get('name') || tabs.get('length') || 0
      , title = childModel.get('title')
    tabs.push({name: name, title: title, model: childModel})
    select()
  })

  current.on('set', function(name) {
    var items = tabs.get()
      , i = items && items.length
      , tab
    while (i--) {
      tab = items[i]
      tab.model.set('active', tab.name == name)
    }
  })

  function select(name) {
    if (name == null) name = current.get()
    if (name == null) name = tabs.get('0.name')
    current.set(name)
  }

  this.clickTab = function(e, el) {
    select(model.at(el).get('name'))
  }
}
