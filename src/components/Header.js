import React from 'react';
import ReactSVG from 'react-svg'
import $ from 'jquery';
import MobileNav from '../partial/MobileNav';
import logo from '../assets/svg/a.svg'

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

  toggleMobileNav = (e) => {
    e.preventDefault();
    $(this.refs.burger).toggleClass('active');
    $('#main-navbar').parent().toggleClass('active');
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
          <div className="uk-navbar-right uk-animation-fade uk-visible@m">
            <ul className="uk-navbar-nav" data-uk-scrollspy-nav="closest: li a; scroll: true">
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
          <div id="hamburger" className="uk-navbar-right uk-hidden@m" onClick={(e) => this.toggleMobileNav(e)}>
            <div className="hamburger" ref="burger">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
