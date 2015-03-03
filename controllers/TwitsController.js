Bitter.TwitsController = Ember.ArrayController.extend({
  actions: {
    addTwit: function() {
      twits.addObject({ id: (twits.length +1).toString(),
        twit: this.twit
      });
    }
  }
});
