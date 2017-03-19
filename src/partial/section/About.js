import React from 'react';
import Panel from '../../components/Panel.js';

class About extends React.Component {

  renderPanels = () => {
    if (this.props.about.panels) {
      return (this.props.about.panels.map((item, index) => {
        return <Panel key={index} title={item.title} content={item.content} icon={item.icon}/>
      }))
    };
  }

  render() {
    return (
      <section id="about" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
        <p className="lato uk-margin-xlarge uk-text-justify medium-text summary">{this.props.profile.summary}</p>
        <div className="uk-child-width-1-3@s uk-margin-xlarge-bottom" data-uk-grid>
          {this.renderPanels()}
        </div>
      </section>
    );
  }

}

export default About;
