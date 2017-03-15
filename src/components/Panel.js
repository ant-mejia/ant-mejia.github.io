import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class Panel extends React.Component {

  render() {
    return (
      <div className="panel">
        <span className={`icon main-icon blue-gradient icon-${this.props.icon}`}></span>
        <div className="uk-panel">
          <h1 className="lato text-split cap uk-text-center">{this.props.title}</h1>
          <p className="uk-text-center">{ReactHtmlParser(this.props.content)}</p>
        </div>
      </div>
    );
  }

}

export default Panel;
