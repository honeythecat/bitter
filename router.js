Bitter.Router.map(function() {
  this.resource('twits', {path: '/'});
  this.resource('twit', {path: 'twits/:twit_id'});
})
