import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      question: this.store.findAll('question'),
      response: this.store.findAll('response')
    });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveLink(params) {
      var newLink = this.store.createRecord('nav-links', params);
      newLink.save();
      this.transitionTo('index');
    },
    update(question, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
            question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
