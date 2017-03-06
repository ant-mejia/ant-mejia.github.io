import React from 'react';

class Projects extends React.Component {

  render() {
    return (
      <section id="projects" className="uk-padding-large">
        Projects: {Object.keys(this.props.projects).map((item) => {
          return (
            <div key={item}>
              <p>Hello!!</p>
              <div>Key: {item}, Title: {this.props.projects[item].title}</div>
            </div>
          );
        })}
      </section>
    );
  }

}

export default Projects;
