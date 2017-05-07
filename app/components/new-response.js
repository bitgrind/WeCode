import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        question: this.get('question')
      };
      this.set('addNewResponse', false)
      this.sendAction('saveResponse', params);
    }
  }
});
