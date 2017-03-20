import React from 'react';

class FullPanel extends React.Component {

  renderType = () => {
    if (this.props.image !== undefined) {
      return <img src={this.props.image} alt=""/>
    } else if (this.props.icon !== undefined) {
      return (
        <span className={`icon main-icon blue-gradient icon-${this.props.icon}`}></span>
      )
    }
  }

  render() {
    if (this.props.reverse) {
      return (
        <div className="full-panel uk-grid-collapse uk-grid-match uk-child-width-expand@m uk-margin-large-bottom uk-text-center" data-uk-grid data-uk-height-viewport>
          <div>
            <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
              <h1 className="lato cap text-split">{this.props.text}</h1>
            </div>
          </div>
          <div>
            <div className="uk-light uk-flex uk-flex-middle uk-flex-center uk-flex-column">
              {this.renderType()}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="full-panel uk-grid-collapse uk-grid-match uk-child-width-expand@m uk-margin-large-bottom uk-text-center" data-uk-grid data-uk-height-viewport>
        <div>
          <div className="uk-light uk-flex uk-flex-middle uk-flex-center uk-flex-column">
            {this.renderType()}
          </div>
        </div>
        <div>
          <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
            <h1 className="lato cap text-split">{this.props.text}</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default FullPanel;
