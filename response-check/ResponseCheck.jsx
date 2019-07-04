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
      // waiting 일 때 클릭시 타이머를 돌려서 랜덤하게 now 화면으로 변하게 해준다.
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
      // ready 일 때 클릭시 타이머를 초기화 해주고 경고 메세지를 보여준다.
      clearTimeout(this.clickTimer);

      this.setState({
        state: 'waiting',
        message: 'So fast, Please click when screen is green.'
      });
    } else if (state === 'now') {
      // now 일 때 클릭시 클릭 한 시간을 저장하고 그 차이를 저장하여 반응속도 시간을 구한다.
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