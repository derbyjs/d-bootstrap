function optionValue(option) {
  return ('value' in option) ? option.value : option.text
}

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
    var option = model.at(e.target).get()
    open.set(false)
    if (!('text' in option)) return
    model.set('value', optionValue(option))
    model.set('text', option.text)
  }
}

// The init function is called on both the server and browser
// before rendering
exports.init = function(model) {
  var value = model.get('value')
    , options = model.get('options')
    , i, len, option, text
  if (!options) return
  for (i = 0, len = options.length; i < len; i++) {
    option = options[i]
    if (optionValue(option) !== value) continue
    model.set('text', option.text)
    return
  }
  option = options[0]
  value = optionValue(option)
  model.set('value', value)
  model.set('text', option.text)
}
