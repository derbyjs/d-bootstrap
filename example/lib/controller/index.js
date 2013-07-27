var derby = require('derby')
    , app = derby.createApp(module)
    ;

derby.use(require('../../ui'));
derby.use(require('derby-ui-boot'));

app.get('/', function(page, model) {
  model.query('users').withId(model.get('_userId')).subscribe(function(err, user) {
    if ( user && user._loggedIn ){
      model.ref('_user', user);
      console.log('auth-mode',user);
      page.render({what:user});
    }
  });
  page.render({_loggedIn:true});
});

app.ready(function(model) {
    // nothing here
});
