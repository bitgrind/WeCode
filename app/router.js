import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('html');
  this.route('css');
  this.route('js');
  this.route('java');
  this.route('php');
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
