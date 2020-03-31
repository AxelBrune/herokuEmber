import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete: function (project) {
        project.destroyRecord().then(() => this.transitionTo('projects'));
    },
    cancel: function () {
      this.transitionTo('projects');
    }
  }
});
