import React from 'react';

class Jumbotron extends React.Component {

  render() {
    return (
      <div className="jumbotron skip-reveal" id="main-jumbo">
        <div data-uk-height-viewport className="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
          <h1 className="uk-text-center uk-text-capitalize wt">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
          <h2 className="uk-text-center uk-text-uppercase wt">{this.props.profile.tagline}</h2>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
