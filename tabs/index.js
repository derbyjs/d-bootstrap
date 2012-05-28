exports.init = function(self) {
  var tabs = self.at('tabs')
  tabs.set([])

  this.on('init:child', function(child) {
    var name = child.get('name') || self.id()
      , title = child.get('title')
    tabs.push({name: name, title: title})
  })
}
