import React from 'react';
import $ from 'jquery';

class MobileNav extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    $('#main-navbar').parent().toggleClass('active');
  }

  render() {
    return (
      <div className="mobile-nav uk-hidden@m">
        <div className="circle"></div>
        <div className="menu uk-width-1-1" data-uk-height-viewport>
          <ul data-uk-scrollspy-nav="cls: uk-active;closest: li; scroll: true;">
            <li className="navlink">
              <a className="uk-link-muted" onClick={(e) => this.handleClick(e)} href="#about">About</a>
            </li>
            <li className="navlink">
              <a className="uk-link-muted" onClick={(e) => this.handleClick(e)} href="#skills">Skills</a>
            </li>
            <li className="navlink">
              <a className="uk-link-muted" onClick={(e) => this.handleClick(e)} href="#projects">Projects</a>
            </li>
            <li className="navlink">
              <a className="uk-link-muted" onClick={(e) => this.handleClick(e)} href="#resume">Resume</a>
            </li>
            <li className="navlink">
              <a className="uk-link-muted" onClick={(e) => this.handleClick(e)} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default MobileNav;
