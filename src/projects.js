import React, { Component } from 'react';
import Project from './project';

import Pix from './img/Pix.png';
import Blogz from './img/Blogz.png';
import Weather from './img/weather.png';
import Twitch from './img/twitch.png';
import Quote from './img/quote.png';
import TTT from './img/ttt.png';
import Calc from './img/calc.png';
import Clock from './img/clock.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div style={styles.container}>
          <Project img={Pix} 
            title='Pix - Pixel art maker'
            link='https://codepen.io/JGoebel03/full/wyWXam/'
            linkTitle='https://codepen.io/JGoebel03/full/wyWXam/'
            tech='HTML | CSS | JS | jQuery'
          />
          <Project img={Blogz}
            title='Blogz - Python Blog'
            link='http://jgoebel03.pythonanywhere.com/blog'
            linkTitle='http://jgoebel03.pythonanywhere.com/blog'
            tech='Python | Flask | mySql | Jinja'
          />
          <Project img={Weather}
            title='WeatherApp - Mini Weather App'
            link='https://codepen.io/JGoebel03/full/OXVYqV/'
            linkTitle='https://codepen.io/JGoebel03/full/OXVYqV/'
            tech='HTML | CSS | JS | jQuery | API'
          />
          <Project img={Twitch}
            title='Twitch Channel Status'
            link='https://codepen.io/JGoebel03/full/VjoBgk/'
            linkTitle='https://codepen.io/JGoebel03/full/VjoBgk/'
            tech='HTML | CSS | JS | jQuery | Twitch API'
          />
          <Project img={Quote}
            title='Quote-O-Matic'
            link='https://codepen.io/JGoebel03/full/gMrpav/'
            linkTitle='https://codepen.io/JGoebel03/full/gMrpav/'
            tech='HTML | CSS | JS | jQuery | Wiki API'
          />
          <Project img={TTT}
            title='Tic-Tac-Toe'
            link='https://codepen.io/JGoebel03/full/KyZyev/'
            linkTitle='https://codepen.io/JGoebel03/full/KyZyev/'
            tech='HTML | CSS | JS | jQuery'
          />
          <Project img={Calc}
            title='Calculator'
            link='https://codepen.io/JGoebel03/full/gwrOVx/'
            linkTitle='https://codepen.io/JGoebel03/full/gwrOVx/'
            tech='HTML | CSS | JS | jQuery'
          />
          <Project img={Clock}
            title='Pomodoro Timer'
            link='https://codepen.io/JGoebel03/full/eBGEMV/'
            linkTitle='https://codepen.io/JGoebel03/full/eBGEMV/'
            tech='HTML | CSS | JS | jQuery'
          />
        </div>
      </div>
    );
  }
}

export default Projects;