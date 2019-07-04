import React, { Component } from 'react';

class Try extends Component {
  render() {
    // 구조 분해 문법을 통해 props 를 받아 올 수 있다.
    const { tryInfo } = this.props;

    return (
      <>
        <div>
          {tryInfo.try}
        </div>
        <div>
          {tryInfo.result}
        </div>
      </>
    );
  }
}

export default Try;
