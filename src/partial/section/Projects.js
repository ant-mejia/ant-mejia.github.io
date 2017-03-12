import React from 'react';
import Project from '../../components/Project';

class Projects extends React.Component {

  render() {
    return (
      <section id="projects" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Projects</h1>
        <div className="uk-grid-medium uk-grid-match uk-grid-small uk-child-width-1-2@s uk-text-center" data-uk-grid>
          {Object.keys(this.props.projects).map((item) => {
            let p = this.props.projects[item]
            return <Project pid={item} key={item} title={p.title} tagline={p.tagline} alt={`${p.title}-project`} project={p}/>
          })}
        </div>
      </section>
    );
  }

}

export default Projects;
