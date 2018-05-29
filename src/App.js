import React, { Component } from 'react';

import './App.css';

import Control from './Components/Control'
import Timer from './Components/Timer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 300,
      sessionLength: 1200,
      timerLength: null,
      timer: null,
      status: 'press start'
    }  
  }

  componentDidMount() {
    this.setState({
      timerLength: this.state.sessionLength
    })
  }

  changeBreakLength = (num) => {
    if(this.state.timer === null) {
      this.setState({
        breakLength: this.state.breakLength === 60 && num < 0 ?
          this.state.breakLength
          : this.state.breakLength + num
      })
    }
  }

  changeSessionLength = (num) => {
    if(this.state.timer === null) {
      this.setState({
        sessionLength: this.state.sessionLength === 60 && num < 0 ?
          this.state.sessionLength
          : this.state.sessionLength + num,
        timerLength: this.state.timerLength === 60 && num < 0 ?
          this.state.timerLength
          : this.state.timerLength + num
      })
    }
  }

  startTimer = () => {
    if(this.state.timer === null) {
      const timer = setInterval(() => {
        this.setState({
          timerLength: this.state.timerLength - 1
        })
        if(this.state.timerLength === 0) {
          clearInterval(timer)
          this.setState({
            timerLength: this.state.breakLength
          })
          document.getElementById("end").play()
          this.startBreakTimer()     
        }
      }, 1000)
      this.setState({
        status: 'work time'
      })
      return this.setState({
        timer: timer
      })
    }
  }

  startBreakTimer = () => {
    const timer = setInterval(() => {
      this.setState({
        timerLength: this.state.timerLength - 1
      })
      if(this.state.timerLength === 0) {
        clearInterval(timer)
        this.setState({
          timerLength: this.state.sessionLength,
          timer: null
        })
        document.getElementById("end").play()  
        this.startTimer()   
      }
    }, 1000)
    this.setState({
      status: 'break time'
    })
    return this.setState({
      timer: timer
    })
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({
      timerLength: this.state.sessionLength,
      timer: null,
      status: 'press start'
    })
  }

  render() {    
    return (
      <div className="pomodoro">
        <h1 className="pomodoro__title">
          Pomodoro Timer
        </h1>
        <div className="pomodoro__config">
          <Control
            controlTitle='Break Length'
            changeTime={this.changeBreakLength}
            displayedTime={this.state.breakLength}
          />
          <Control
            controlTitle='Session Length'
            changeTime={this.changeSessionLength}
            displayedTime={this.state.sessionLength}
          />
        </div>
        <p className="pomodoro__status">
          {this.state.status}
        </p>
        <Timer
          timerLength={this.state.timerLength} status={this.state.status}
        />
        <button className="pomodoro__button pomodoro__button-start-stop" onClick={this.startTimer}>
          Start
        </button>
        <button className="pomodoro__button pomodoro__button-start-stop" onClick={this.stopTimer}>
          Stop
        </button>
        <audio id="end" src={process.env.PUBLIC_URL + '/media/ding.mp3'} preload="auto" />
      </div>
    );
  }
}

export default App;
