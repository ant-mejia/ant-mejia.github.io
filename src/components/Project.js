import React from 'react';
import ProjectModal from './ProjectModal';

class Project extends React.Component {

  render() {
    let screenshot = this.props.project.images
      ? this.props.project.images.screenshot
      : 'http://placehold.it/1000x580'
    return (
      <div className="project-wrapper">
        <a className="uk-link-muted" href={`#${this.props.pid}-modal`} data-uk-toggle>
          <div className="uk-text-center">
            <div className="uk-inline-clip uk-transition-toggle">
              <div className="uk-padding-small uk-padding-remove-vertical">
                <img src={screenshot} alt={this.props.alt}/>
              </div>
              <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <div className="uk-text-left uk-width-1-1">
                  <h1 className="project-title cap lato uk-margin-small-bottom">{this.props.title}</h1>
                  <p className="project-tagline lato uk-h4">{this.props.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <ProjectModal target={`${this.props.pid}-modal`} project={this.props.project}/>
      </div>
    );
  }
}

export default Project;
