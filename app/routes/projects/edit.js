import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({project_id}) {
    return RSVP.hash({
      projet: this.get('store').find('project', project_id),
      devs: this.get('store').findAll('developer')
    })
  },
  actions: {
    edit: function (project) {
      project.save().then(() => this.transitionTo('projects'));
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
