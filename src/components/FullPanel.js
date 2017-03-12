import React from 'react';

class FullPanel extends React.Component {

  render() {
    if (this.props.reverse) {
      return (
        <div className="uk-grid-collapse uk-grid-match uk-child-width-expand@m uk-margin-large-bottom uk-text-center" data-uk-grid data-uk-height-viewport>
          <div>
            <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
              <h1>Title of Something</h1>
            </div>
          </div>
          <div>
            <div className="uk-light uk-flex uk-flex-middle uk-flex-center uk-flex-column">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e50c1.appspot.com/o/projects%2Fdrop%2Fdrop.png?alt=media&token=06e0c873-938b-4a8d-ae44-fe3c02f6ecae" alt=""/>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="uk-grid-collapse uk-grid-match uk-child-width-expand@m uk-margin-large-bottom uk-text-center" data-uk-grid data-uk-height-viewport>
        <div>
          <div className="uk-light uk-flex uk-flex-middle uk-flex-center uk-flex-column">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e50c1.appspot.com/o/projects%2Fdrop%2Fdrop.png?alt=media&token=06e0c873-938b-4a8d-ae44-fe3c02f6ecae" alt=""/>
          </div>
        </div>
        <div>
          <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-column">
            <h1>Title of Something</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default FullPanel;
