import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model({story_id}) {
      return RSVP.hash({
        colors: ['black', 'blue', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'positive', 'negative'],
        story: this.get('store').findRecord('story', story_id),
        tag: EmberObject.create(),
        developers: this.get('store').findAll('developer'),
        tags: this.get('store').findAll('tag')
      })
    },
    actions: {
      saveStory: function (story) {
        story.save().then(() => this.transitionTo('project', story.get('project').get('id')));
      },
      saveTag: function (tag) {
        this.get('store').createRecord('tag', tag).save();
      }
    }
  }
);
