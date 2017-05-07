import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    responseFormShow() {
      this.set('addNewReview', true);
    },
    saveResponse() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        question: this.get('question')
      };
      this.set('addNewReview', false)
      this.sendAction('saveResponse', params);
    }
  }
});
