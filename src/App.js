import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link  
} from 'react-router-dom';

import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      location: ''
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Navigation">
          <h1>Jason Goebel</h1>
          <h3>Frontend Developer</h3>
          <hr/>
            <ul>
              <li><Link to='/'>Projects</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          <hr/>
          </div>
          <Route exact path="/" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
