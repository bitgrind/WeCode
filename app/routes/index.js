import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
    },
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      newResponse.save();
      this.transitionTo('index');
    }
  }
});
