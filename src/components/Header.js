import React from 'react';
import ReactSVG from 'react-svg'
import $ from 'jquery';
import MobileNav from '../partial/MobileNav';
import logo from '../a.svg'

class Header extends React.Component {
  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > $(".jumbotron").height() - $(".uk-navbar-container").height()) {
        $(".uk-navbar-container").addClass("uk-navbar-opaque").removeClass("uk-navbar-transparent");
      } else {
        $(".uk-navbar-container").addClass("uk-navbar-transparent").removeClass("uk-navbar-opaque");
      }
    });
  }

  //data-uk-scrollspy-nav="overflow: false; cls: uk-animation-fade uk-active;closest: li; scroll: true; offset: 60"
  render() {
    return (
      <header data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container uk-margin uk-navbar-transparent" id="main-navbar" data-uk-navbar="mode: click">
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#top" data-uk-scroll>
              <ReactSVG path={logo} className="svg-logo" style={{
                width: 80,
                height: 80,
                marginTop: -20
              }}/>
              <div className="wt cap uk-visible@m text-split lato">Anthony Mejia</div>
            </a>
          </div>
          <div className="uk-navbar-right uk-visible@m">
            <ul className="uk-navbar-nav">
              <li className="navlink">
                <a href="#about">About</a>
              </li>
              <li className="navlink">
                <a href="#projects">Projects</a>
              </li>
              <li className="navlink">
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </div>
          <MobileNav/>
          <div className="uk-navbar-right uk-hidden@m">
            <a className="" href="#">
              <div className="hamburger">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
