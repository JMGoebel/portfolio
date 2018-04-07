import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link  
} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <h1>Jason Goebel</h1>
        <h3>Frontend Developer</h3>
        <hr/>
          <ul>
            <li><Link to='/'>Projects</Link></li>
            <li><Link to='/'>Resume</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
        <hr/>
      </div>
    )
  }
}

export default Navigation