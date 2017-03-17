import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
import './style.css';

$(document).ready(function() {
  ReactDOM.render(
    <App/>, document.getElementById('root'));
});
