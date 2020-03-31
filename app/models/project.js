import DS from 'ember-data';
import EmberResolver from 'ember-resolver';

const {Model} = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('utc'),
  dueDate: DS.attr('utc'),
  owner: DS.belongsTo('developer'),
  stories: DS.hasMany('story'),
  boardVisible : DS.attr('boolean'),
  backlog: Ember.computed('boardVisible', 'stories.@each.step', function () {
    let stories = [];
    if(this.get('boardsVisible') === true) {
      this.stories.forEach(story => {
        if(story.step.id !== undefined) {
          stories.push(story);
        }
        return stories;
      })
    } else {
      return this.get('stories');
    }
  })
});
