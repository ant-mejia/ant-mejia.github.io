import React from 'react';

class MobileNav extends React.Component {

  render() {
    return (
      <div className="mobile-nav uk-hidden@m">
        <div className="circle"></div>
        <div className="menu uk-width-1-1" data-uk-height-viewport>
          <ul data-uk-scrollspy-nav="cls: uk-animation-fade uk-active;closest: li; scroll: true; offset: 70">
            <li className="navlink">
              <a href="#about">About</a>
            </li>
            <li className="navlink">
              <a href="#skills">Skills</a>
            </li>
            <li className="navlink">
              <a href="#projects">Projects</a>
            </li>
            <li className="navlink">
              <a href="#resume">Resume</a>
            </li>
            <li className="navlink">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default MobileNav;
