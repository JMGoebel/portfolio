import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  img: {
    width: '400px',
    height: '225px',
    '@media screen and (max-width: 450px)': {
      width: '300px',
      height: '169px',
    },
    borderBottom: '2px black solid'
  },
  card: {
    width: '400px',
    margin: '20px 20px 0 20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    ':hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.8)',
    },
    '@media screen and (max-width: 450px)': {
      width: '300px',
      marginTop: '20px',
      fontSize: '.75em'
    }
  },
  container: {
    padding: '2px 16px',
  },
  title: {
    margin: '0',
    opacity: '.75',
    display: 'inline',
    padding: '0 10px 0 10px'
  },
  link: {
    color: 'blue',
    padding: '0',
    fontSize: '.75em'
  }
}

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div style={styles.card}>
          <img style={styles.img} src={this.props.img} alt='project information'/>
          <div style={styles.container}>
            <h4 style={styles.title}>Project: </h4><span>{this.props.title}</span><br/>
            <h4 style={styles.title}>Tech: </h4><span>{this.props.tech}</span><br/>
            <h4 style={styles.title}>Link: </h4>
            <span>
              <a style={styles.link} href={this.props.link} target="_blank">{this.props.linkTitle}</a>
            </span><br/>
            <p>{this.props.disc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Project);