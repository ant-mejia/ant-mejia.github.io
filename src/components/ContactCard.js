import React from 'react';

class ContactCard extends React.Component {

  render() {
    return (
      <div className="uk-text-center uk-padding-large">
        <a href={this.props.link} target="_blank">
          <div className="uk-inline-clip uk-transition-toggle">
            <div className="uk-padding-small">
              <h3>{this.props.text}</h3>
            </div>
            <div className="uk-transition-slide-bottom uk-position-bottom">
              <p className="uk-h4 uk-margin-remove">{this.props.alt}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }

}

export default ContactCard;
