import React, { Component } from 'react';
import Ball from './Ball';

const getWinNumbers =() => {
  console.log('Get win numbers');

  const candidates = Array(45).fill().map((v, i) => i + 1); // Make 1 ~ 45 Arrays
  const shuffled = [];

  while(candidates.length > 0) {
    shuffled.push(candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0]);
  } // Splice candidates Array when candidates length is 0

  const winNumbers = shuffled.slice(0, 6); // Slice 6
  const bonus = shuffled[shuffled.length - 1]; // Slice last element

  return [...winNumbers, bonus]; // Combine two element
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  }

  timeouts = [];

  componentDidMount() {
    this.setWinBallsTimers(); // Start timer
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Component did update');
    if (this.state.winBalls.length === 0) {
      this.setWinBallsTimers(); // When call winBalls state length is 0
    }
  }

  componentWillUnMount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v); // Clear timers
    });
  }

  setWinBallsTimers = () => {
    const { winNumbers } = this.state;

    winNumbers.forEach((item, index) => {
      this.timeouts = setTimeout(() => {
        if (index === winNumbers.length - 1) {
          this.setState({
            bonus: item,
            redo: true
          }); // Set bonus ball and set redo(Show Redo button)
        } else {
          this.setState((prevState) => {
            return {
              winBalls: [...prevState.winBalls, item]
            };
          });
        }
      }, (index + 1) * 500) // Set timeout by index
    });
  }

  setBonusNumber = () => {
    const { bonus, redo } = this.state;
    // Using if statement
    return (
      <>
        {!!bonus ? <Ball number={bonus}/> : null}
        {!!redo ? <button onClick={this.clickRedo}>Redo</button> : null}
      </>
    )
  }

  clickRedo = () => {
    console.log('Click redo');
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    }); // Clear states
    this.timeouts = []; // Clear timers
  }

  render() {
    const { winBalls } = this.state;

    return (
      <>
        <div>
          WinBalls
        </div>
        {
          winBalls.map((value) => { // Seperate by for loop
            return <Ball key={value} number={value}/>
          })
        }
        <div>
          Bonus Ball
        </div>
        {this.setBonusNumber()}
      </>
    );
  }
}

export default Lotto;