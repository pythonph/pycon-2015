import React from 'react'
import prettyMs from 'pretty-ms'

var Timer = React.createClass({
  getInitialState() {
    return {
      interval: null,
      time: this.getTimeFromHash(),
    }
  },
  render() {
    return (
      <div className="timer">
        <div className="clock">{prettyMs(this.state.time * 1000)}</div>
        <ul className="timer-choices">
          <li><a href="#3600">1h</a></li>
          <li><a href="#2700">45m</a></li>
          <li><a href="#1800">30m</a></li>
          <li><a href="#900">15m</a></li>
          <li><a href="#600">10m</a></li>
          <li><a href="#300">5m</a></li>
        </ul>
        <ul className="timer-controls">
          {!this.state.interval ? (
          <li><a href="#" onClick={this.start}>Start</a></li>
          ) : (
          <li><a href="#" onClick={this.stop}>Stop</a></li>
          )}
        </ul>
      </div>
    )
  },
  getTimeFromHash() {
    return location.hash.length > 0 ? location.hash.substring(1) : 0
  },
  setTime() {
    this.setState(this.getInitialState())
  },
  start(e) {
    e && e.preventDefault()
    this.state.interval && this.stop()
    this.setState({
      interval: setInterval(this.countdown, 1000),
    })
  },
  stop(e) {
    e && e.preventDefault()
    if (this.state.interval) {
      clearInterval(this.state.interval)
      this.setState({interval: null})
    }
  },
  countdown() {
    if (this.state.time > 0) {
      this.setState({time: --this.state.time})
    } else {
      this.stop()
    }
  },
})

let timer = React.render(
  <Timer />,
  document.querySelector('.document')
)

window.addEventListener('hashchange', (e) => {
  timer.stop()
  timer.setTime()
})
