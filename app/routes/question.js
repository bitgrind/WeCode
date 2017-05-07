import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var question = params.question;
      question.get('response').addObject(newResponse);
      newResponse.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question);
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
