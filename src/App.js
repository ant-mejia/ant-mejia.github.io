import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './view/Home';
import NotFound from './view/NotFound';
import Rebase from 're-base';
var base = Rebase.createClass({
  apiKey: "AIzaSyDCPU99j4L15R1QHb4s5xwujDRBPzlJGew",
  authDomain: "portfolio-e50c1.firebaseapp.com",
  databaseURL: "https://portfolio-e50c1.firebaseio.com",
  storageBucket: "portfolio-e50c1.appspot.com",
  messagingSenderId: "835347983787"
}, 'myApp');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: {},
      skills: {},
      resume: {}
    };
  }
  componentDidMount() {
    base.syncState(`profile`, {
      context: this,
      state: 'profile'
    })
    base.syncState(`projects`, {
      context: this,
      state: 'projects'
    });
    base.syncState(`skills`, {
      context: this,
      state: 'skills'
    });
    base.syncState(`resume`, {
      context: this,
      state: 'resume'
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Header/>
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={() => <Home profile={this.state.profile} projects={this.state.projects} skills={this.state.skills} resume={this.state.resume}/>}/>
              <Route path="/project/:id"/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
