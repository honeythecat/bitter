Bitter.TwitRoute = Ember.Route.extend({
  model: function(params) {
    return twits.findBy('id', params.post_id);
  }
});
