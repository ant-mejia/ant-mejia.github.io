import React from 'react';

class Resume extends React.Component {

  render() {
    return (
      <section id="resume" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Resume</h1>
        <div>
          <h2>{this.props.resume.firstName} {this.props.resume.firstName}</h2>
        </div>
      </section>
    );
  }

}

export default Resume;
