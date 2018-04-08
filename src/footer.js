import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  footer: {
    backgroundColor: 'black',
    position: 'fixed',
    width: '100%',
    height: '60px',
    bottom: '0'
  },
  list: {
    color: 'white',
    fontWeight: 'bold',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media screen and (max-width: 600px)': {
      display: 'block',
      textAlign: 'center'
    }
  },
  lable: {
    opacity: '.75',
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={styles.footer}>
        <ul style={styles.list}>
          <li><span style={styles.lable}>Email:</span> goebel.jason@gmail.com</li>
          <li><span style={styles.lable}>Phone:</span> (913) 250-7515</li>
        </ul>
      </div>
    );
  }
}

export default Radium(Footer);