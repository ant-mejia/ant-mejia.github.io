import React from 'react';

class ResumePanel extends React.Component {

  renderList = () => {
    if (this.props.content) {
      let content = this.props.content;
    }
  }

  render() {
    return (
      <div>
        <div>Title</div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }

}

export default ResumePanel;
