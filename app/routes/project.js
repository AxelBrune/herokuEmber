import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model({project_id}) {
      return RSVP.hash({
        project: this.get('store').findRecord('project', project_id),
        stories: this.get('store').query('story', {filter: {project: project_id}})
      })
    }
  }
);
