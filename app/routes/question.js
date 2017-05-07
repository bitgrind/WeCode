import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  saveResponse(params) {
    var newResponse = this.store.createRecord('response', params);
    var question = params.quesiton;
    newResponse.save().then(function(){
      return question.save();
    });
    this.transitionTo('question', question);
  },
  destroyQuestion(question) {
    question.destroyRecord();
    this.transitionTo('index');
  }
});
