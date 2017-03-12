import React from 'react';
import FullPanel from './FullPanel';
import ReactHtmlParser from 'react-html-parser';

class ProjectModal extends React.Component {

  render() {
    let background = this.props.project.images.background
      ? this.props.project.images.background
      : "http://placehold.it/1440x900";
    return (
      <div id={this.props.target} className="uk-modal-full project-modal" data-uk-modal>
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-full highhh" type="button" data-uk-close></button>
          <div className="uk-flex-middle">
            <div>
              <div className="uk-cover-container uk-margin-medium-bottom" data-uk-height-viewport>
                <img src={background} alt="" data-uk-cover/>
              </div>
              <div className="modal-container uk-container uk-padding-large">
                <div className="uk-width-1-2@m project-heading">
                  <div className="uk-grid-small uk-child-width-1-2@s uk-margin-xlarge-bottom" data-uk-grid>
                    <div className="project-meta">
                      <h3>Client</h3>
                      <p className="cap">{this.props.project.meta.client}</p>
                    </div>
                    <div className="project-meta">
                      <h3>Technologies</h3>
                      <p>{this.props.project.techs}</p>
                    </div>
                  </div>
                  <h1 className="modal-title">{this.props.project.title}</h1>
                  <h2>{this.props.project.tagline}</h2>
                  {ReactHtmlParser(this.props.project.description)}
                </div>
                <img className="uk-margin-large" src="https://placehold.it/2000x880" alt=""/>
                <FullPanel reverse={false}/>
                <FullPanel reverse={true}/>
                <FullPanel reverse={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectModal;
