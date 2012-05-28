exports.create = function(model, dom) {
  function close(button) {
    var cancelled = model.trigger('close', button)
    if (cancelled) return
    model.set('show', false)
  }

  dom.addListener(document, 'keydown', function(e) {
    if (e.keyCode === 27) {  // Escape
      close('escape')
    }
  })

  this.click = function(e) {
    var button = e.target.getAttribute('data-button')
    if (button) close(button)
  }
}
