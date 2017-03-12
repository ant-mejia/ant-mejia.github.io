import React from 'react';
import Panel from '../../components/Panel.js';

class About extends React.Component {

  render() {
    return (
      <section id="about" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
        <p>{this.props.profile.summary}</p>
        <div className="uk-child-width-1-3@s" data-uk-grid>
          <Panel icon="heart"/>
          <Panel icon="globe"/>
          <Panel icon="globe"/>
        </div>
      </section>
    );
  }

}

export default About;
