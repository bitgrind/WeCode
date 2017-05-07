import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var question = params.quesiton;
      newResponse.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
