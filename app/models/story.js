import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  code: DS.attr('string'),
  description: DS.attr('string'),
  project: DS.belongsTo('project'),
  tags: DS.hasMany('tag'),
  developer: DS.belongsTo('developer')
});