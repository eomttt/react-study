import React, { Component } from 'react';

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  rock: '0',
  cissor: '-142px',
  paper: '-284px',
};

const scores = {
  rock: 1,
  cissor: 0,
  paper: -1,
};

const computerChoice = (imageCoord) => {
  return Object.entries(rspCoords).find((value) => {
    return value[1] === imageCoord;
  })[0];
};

class RcpGame extends Component {
  state = {
    imageCoord: rspCoords.rock,
    result: '',
    score: 0,
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  componentDidUpdate () {
    // Nothing
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imageCoord } = this.state;

    if (imageCoord === rspCoords.rock) {
      this.setState({
        imageCoord: rspCoords.cissor
      });
    } else if (imageCoord === rspCoords.cissor) {
      this.setState({
        imageCoord: rspCoords.paper
      });
    } else if (imageCoord === rspCoords.paper) {
      this.setState({
        imageCoord: rspCoords.rock
      });
    }
  };

  onClickBtn = (choice) => () => {
    const { imageCoord } = this.state;
    clearInterval(this.interval);

    const userScore = scores[choice];
    const compScore = scores[computerChoice(imageCoord)];

    const scoreDiff = userScore - compScore;

    if (scoreDiff === 0) {
      this.setState({
        result: 'Draw, Select: ' + choice
      });
    } else if (scoreDiff === 1 || scoreDiff === -2) {
      this.setState((prevState) => {
        return {
          result: 'Win, Select: ' + choice,
          score: prevState.score + 1
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: 'Loose, Select: ' + choice,
          score: prevState.score - 1
        };
      });
    }

    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  }

  render() {
    const { imageCoord, result, score } = this.state;

    return (
      <>
        <div id="computer" style={{ backgroundImage: 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)', backgroundPosition: `${imageCoord} 0`}} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('cissor')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RcpGame;