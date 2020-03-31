import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model() {
      let {project_id} = this.paramsFor('project');
      return RSVP.hash({
        projet: this.get('store').find('project', project_id),
        steps: this.get('store').findAll('step').then(steps => steps.sortBy('order'))
      })
    },
    actions:{
      cancel: function(){
        this.transitionTo('project');
      },
      moveToStep: function (story_id, step) {
        this.get('store').findRecord('story', story_id).then((story) => {
          this.set(story, 'step', step);
          story.save().then(() => {
            this.refresh();
          })
        })
      }
    }
  }
);
