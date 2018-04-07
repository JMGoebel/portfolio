import React, { Component } from 'react';
import Project from './project';

import Pix from './img/Pix.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Project img={Pix}/>
        <Project img={Pix}/>
        <Project img={Pix}/>
      </div>
    );
  }
}

export default Projects;