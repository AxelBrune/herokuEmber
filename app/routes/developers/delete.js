import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete: function (developer) {
      this.get('store').findRecord('developer', developer.id, {reload: true}).then((developer) => {
        developer.destroyRecord().then(() => {
          this.transitionTo('developers');
        });
      });
    },
    cancel: function () {
      this.transitionTo('developers');
    }
  }
});
