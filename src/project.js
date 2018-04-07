import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <img src={this.props.img} alt='project information'/>
      </div>
    );
  }
}

export default Project;