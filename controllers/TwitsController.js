Bitter.TwitsController = Ember.ArrayController.extend({
  sortProperties: ["date"],
  sortAscending: false,
  actions: {
    addTwit: function() {
      twits.addObject({ id: (twits.length +1).toString(),
        twit: this.twit,
        date: new Date().toLocaleString()
      });
    }
  }
});
