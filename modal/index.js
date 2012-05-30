exports.create = function(model, dom) {
  var self = this;

  this.close = function(action) {
    var cancelled = this.emitCancellable('close', action)
    if (cancelled) return
    model.set('show', false)
  }

  dom.addListener(document, 'keydown', function(e) {
    if (e.keyCode === 27) {  // Escape
      self.close('escape')
    }
  })

  this.click = function(e) {
    var action = e.target.getAttribute('data-action')
    if (action) self.close(action)
  }
}
