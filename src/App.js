import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link  
} from 'react-router-dom';
import Radium, {StyleRoot} from 'radium';

import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

import './App.css';

const styles = {
  title: {
    fontSize: '4em',
    textAlign: 'center',
    margin: '.5em 0 0 0',
    padding: '0',
  },
  subTitle: {
    margin: '.2em 0 0 0',
    padding: '0',
    fontSize: '2em',
    textAlign: 'center',
    opacity: '0.75'
  },
  nav: {
    margin: '1em 0 0 0',
    padding: '10px 0',
    listStyle: 'none',
    textAlign: 'center',
    backgroundColor: 'black'
  },
}

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
      <StyleRoot>
        <Router>
          <div className="App">
            <div className="Navigation">
              <h1 style={styles.title}>Jason Goebel</h1>
              <h3 style={styles.subTitle}>Frontend Developer</h3>
              <ul style={styles.nav}>
                <li><Link className="Link" style={styles.links} to='/'>Projects</Link></li>
                <li><Link className="Link" style={styles.links} to='/resume'>Resume</Link></li>
                <li><Link className="Link" style={styles.links} to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <Route exact path="/" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </StyleRoot>
    );
  }
}


export default Radium(App);
