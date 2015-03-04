Bitter.TwitsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('twits');
  },
  model: function() {
    return twits;
  }
});
