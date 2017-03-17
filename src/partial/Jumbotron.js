import React from 'react';
import ReactSVG from 'react-svg'
import mouse from '../assets/svg/mouse.svg'
class Jumbotron extends React.Component {

  render() {
    return (
      <div className="jumbotron skip-reveal uk-cover-container" id="main-jumbo">
        <div className="maxh-100 parallax image-container" data-uk-height-viewport></div>
        <div className="uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-position-top jumbo-gradient">
          <h1 className="uk-animation-fade lato text-split cap uk-text-center wt">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
          <h2 className="uk-animation-fade lato text-split uk-text-center cap wt">{this.props.profile.tagline}</h2>
        </div>
        <div className="uk-position-bottom uk-text-center">
          <a href="#about" data-uk-scroll>
            <span className="wt">
              <ReactSVG path={mouse} className="mousedown uk-animation-fade" style={{
                width: 50,
                height: 50,
                marginBottom: 10
              }}/>
            </span>
          </a>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
