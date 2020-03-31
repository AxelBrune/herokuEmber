import Route from '@ember/routing/route';

export default Route.extend({
  model({developer_id}) {
    return this.get('store').find('project', developer_id);
  },
  actions: {
    edit: function (developer) {
      developer.save().then(() => this.transitionTo('developers'));
    },
    cancel: function () {
      this.transitionTo('developers');
    }
  }
});