Bitter.TwitsRoute = Ember.Route.extend({
  controllerName: 'twits',
  renderTemplate: function() {
    this.render('twits');
  },
  model: function() {
    return twits;
  }
});
