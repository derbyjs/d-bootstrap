// The create function is called after the component is created
// and has been added to the DOM. It only runs in the browser
exports.create = function(model, dom) {
  var toggle = dom.element('toggle')
    , menu = dom.element('menu')
    , open = model.at('open')

  // Listeners added inside of a component are removed when the
  // page is re-rendered client side
  dom.addListener(document.documentElement, 'click', function(e) {
    if (e.target === toggle || menu.contains(e.target)) return
    open.set(false)
  })

  this.clickToggle = function() {
    open.set(!open.get())
  }

  this.clickMenu = function(e) {
    var item = model.at(e.target)
      , value = item.get().text
    open.set(false)
    if (value != null) {
      model.set('value', value)
    }
  }
}

// The init function is called on both the server and browser
// before rendering
exports.init = function(model) {
  model.setNull('value', model.get('items.0.text'))
}
