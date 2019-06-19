import React, { Component } from 'react';

class ClassApp extends Component {
  state = {
   word: '밤편지 클래스',
   value: '',
   result: ''
  };
  input;

  _onSubmit = (event) => {
    event.preventDefault();

    if (this._isRelayedWord()) {
      this.setState((prevState) => {
        return {
          word: prevState.value,
          value: '',
          result: 'Correct'
        }
       });
    } else {
      this.setState({
        value: '',
        result: 'Wrong'
      });
    }

    this.input.focus(); // Cursor를 옮겨준다.
  }

  _isRelayedWord = () => {
    let resultLastWord = this.state.word[this.state.word.length - 1],
      valueFirstWord = this.state.value[0];

    return resultLastWord === valueFirstWord;
  }

  _onChange = (event) => {
    this.setState({value: event.target.value}) // State를 변경 해준다. (value 변경)
  }

  _onInputRef = (ref) => {
    this.input = ref; // Input cursor를 세팅해준다.
  }

  render() {
    console.log('Rendering');
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this._onSubmit}>
          <input ref={this._onInputRef} type='text' value={this.state.value} onChange={this._onChange}/>
          <button>Insert!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}



