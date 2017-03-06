import React from 'react';
import $ from 'jquery';
import Jumbotron from '../partial/Jumbotron';
import About from '../partial/section/About';
import Skills from '../partial/section/Skills';
import Projects from '../partial/section/Projects';
import Resume from '../partial/section/Resume'
import Contact from '../partial/section/Contact';

class Home extends React.Component {
  componentDidMount() {
    let code = "<div id=\"panelcode\"><script type=\"text/javascript\">$(function()\n {$('#section-wrapper').panelSnap()})</script></div>";
    if (!$('#panelcode').length) {
      $('body').append(code);
    }
  }
  render() {
    return (
      <div id="top">
        <Jumbotron profile={this.props.profile}/>
        <div id="section-wrapper">
          <About profile={this.props.profile}/>
          <Skills skills={this.props.skills}/>
          <Projects projects={this.props.projects}/>
          <Resume profile={this.props.profile} resume={this.props.resume}/>
          <Contact profile={this.props.profile}/>
        </div>
      </div>
    );
  }

}

export default Home;
