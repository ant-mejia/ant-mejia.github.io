import React from 'react';
import ReactSVG from 'react-svg'
import logo from '../assets/svg/a.svg'

class Footer extends React.Component {

  render() {
    return (
      <footer className="uk-container uk-height-medium uk-margin-xlarge-top">
        <hr/>
        <div className="uk-text-center">
          <h3 className="lato grey">Copyright &copy; 2017 Anthony Mejia All Rights Reserved.</h3>
          <ReactSVG path={logo} className="svg-logo" style={{
            width: 80,
            height: 80,
            marginTop: -20
          }}/>
        </div>
      </footer>
    );
  }

}

export default Footer;
