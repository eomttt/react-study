import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: 'Click to start.',
    result: []
  };

  clickTimer;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;

    if (state === 'waiting') {
      this.clickTimer = setTimeout(() => {
        this.setState({
          state: 'now',
          message: 'Click now'
        });
      }, Math.floor(Math.random() * 1000) + 2000); // Random 2~3 second

      this.startTime = new Date();

      this.setState({
        state: 'ready',
        message: 'Click to when screen is green.'
      });
    } else if (state === 'ready') {
      clearTimeout(this.clickTimer);

      this.setState({
        state: 'waiting',
        message: 'So fast, Please click when screen is green.'
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: 'Click to start.',
          result: [...prevState.result, this.endTime - this.startTime]
        }
      });
    }
  }

  renderAverage = () => {
    const { result } = this.state;

    return result.length === 0 ? null : <><div>Average time: {(result.reduce((a, b) => a + b)) / result.length}</div></>
  }

  render() {
    const { state, message, result } = this.state;

    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;