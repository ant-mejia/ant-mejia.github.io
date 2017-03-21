import React from 'react';
import ResumePanel from '../../components/ResumePanel';

class Resume extends React.Component {

  renderExperience = () => {
    let experience = this.props.resume.experience
    if (experience) {
      return (
        <div>
          <h3 className="uk-heading-line uk-margin-large-bottom">
            <span className="lato cap text-split">Experience</span>
          </h3>
          <ul className="uk-list uk-list-large uk-list-divider">
            {Object.keys(experience).map((item, key) => {
              return (
                <li key={key}>
                  <div className="uk-text-left">
                    <h4 className="uk-h3 lato">{experience[item].position}</h4>
                    <h4 className="uk-h3 uk-margin-remove lato">{experience[item].company}</h4>
                    <p className="lato grey medium-text">{experience[item].summary}</p>
                    <h5 className="uk-h4 lato text-split">{`${experience[item].startDate.replace('/20', '.')} - ${experience[item].endDate.replace('/20', '.')}`}</h5>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  renderEducation = () => {
    let education = this.props.resume.education
    if (education) {
      return (
        <div>
          <h3 className="uk-heading-line uk-margin-large-bottom">
            <span className="lato cap text-split">Education</span>
          </h3>
          <ul className="uk-list uk-list-large uk-list-divider">
            {Object.keys(education).map((item, key) => {
              return (
                <li key={key}>
                  <div className="uk-text-left">
                    <h4 className="uk-h3 lato">{education[item].degree}</h4>
                    <h4 className="uk-h3 uk-margin-remove lato">{education[item].university}</h4>
                    <p className="lato grey medium-text">{education[item].summary}</p>
                    <h5 className="uk-h4 lato text-split">{`${education[item].startDate.replace('/20', '.')} - ${education[item].endDate.replace('/20', '.')}`}</h5>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <section id="resume" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Resume</h1>
        <div className="uk-padding-large">
          <h2 className="lato uk-margin-remove">{this.props.profile.firstName} {this.props.profile.lastName}</h2>
          <h3 className="lato uk-margin-remove">{this.props.resume.currentPosition}</h3>
          <div className="experience-container uk-grid-small uk-child-width-expand@s uk-text-center uk-margin-large-top uk-margin-large-bottom" data-uk-grid>
            {this.renderExperience()}
            {this.renderEducation()}
          </div>
          <div className="uk-text-center">
            <a className="lato cap text-split uk-display-inline-block line-button" href={this.props.resume.link} target="_blank">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }

}

export default Resume;
