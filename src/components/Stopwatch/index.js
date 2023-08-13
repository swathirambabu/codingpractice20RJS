// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onResetTimer = () => {
    clearInterval(this.timer)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timer)
    this.setState({isTimerRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timer = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="container">
          <div className="stopwatch-container">
            <h1 className="heading">Stopwatch</h1>
            <div className="timer-container">
              <div className="time-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="stopwatch"
                />
                <p className="title">Timer</p>
              </div>
              <h1 className="stopwatch-timer">{time}</h1>
              <div className="button-container">
                <button
                  type="button"
                  className="start-button"
                  onClick={this.onStartTimer}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="stop-button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="reset-button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
