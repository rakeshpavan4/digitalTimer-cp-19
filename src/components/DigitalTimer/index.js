// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {limit: 25, time: false}

  onIncrement = () => {
    this.setState(prevstate => ({
      limit: prevstate.limit + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevstate => ({
      limit: prevstate.limit - 1,
    }))
  }

  onStart = () => {
    this.setState(prevstate => ({
      time: !prevstate.time,
    }))
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevstate => ({limit: prevstate.limit - 1}))
  }

  render() {
    const {limit, time} = this.state
    const hours = Math.floor(limit / 60)
    const minutes = limit % 60
    const seconds = minutes * 60

    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
            alt="w"
          />
          <div className="circle">
            <h1>{limit}</h1>
            <p>{time ? 'Running' : 'Paused'}</p>
          </div>

          <div className="start-reset">
            <button
              type="button"
              className="play-button"
              onClick={this.onStart}
            >
              {time ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="pause icon"
                  className="play-image"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="play-image"
                />
              )}

              <span>{time ? 'Pause' : 'Start'}</span>
            </button>
            <button type="button" className="reset-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="play-image"
              />
              <span>reset</span>
            </button>
            <div>
              <p>set Timer Limit</p>
              <button
                type="button"
                className="play-button"
                onClick={this.onDecrement}
              >
                -
              </button>

              <p className="timelimit">{limit}</p>

              <button
                type="button"
                className="play-button"
                onClick={this.onIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
