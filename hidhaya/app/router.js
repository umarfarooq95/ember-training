import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('posts');
  // this.route('login');
  // this.route('users');
  // this.route('post-list');
  // this.route('scientists');
  // this.route('trainer');
  this.route('training');
  this.route('employees');
});

export default Router;
