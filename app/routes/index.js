import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      question: this.store.findAll('question')
    });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var question = params.quesiton;
      newResponse.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
