import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      projet: EmberObject.create(),
      devs: this.get('store').findAll('developer')
    })
  },
  actions: {
    save: function (project) {
      this.get('store').createRecord('project', project).save().then(() => this.transitionTo('projects'));
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
