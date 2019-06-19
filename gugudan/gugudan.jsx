import React from 'react';

class ClassApp extends React.Component {
  state = {
   first: Math.ceil(Math.random() * 9),
   second: Math.ceil(Math.random() * 9),
   value: '',
   result: ''
  };
  input;

  _onSubmit = (event) => {
    event.preventDefault();
    if (this.state.first * this.state.second === parseInt(this.state.value)) {
      // state를 변경 시에는 setState 메소드를 사용 해야 합니다.
      this.setState((prevState) => {
        return {
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
          result: prevState.value + ' Correct'
        }
       }); // setState 는 비동기이기 때문에 prevState를 해줘야 예상치 못한 버그를 안낼 수 있다.

      this.input.focus(); // Cursor를 옮겨준다.
    } else {
      this.setState((prevState) => {
        return {
          value: '',
          result: prevState.value + ' Wrong'
        }
      });

      this.input.focus(); // Cursor를 옮겨준다.
    }
  }

  _onChange = (event) => {
    this.setState({value: event.target.value}) // State를 변경 해준다. (value 변경)
  }

  _onInputRef = (ref) => {
    this.input = ref;
  } // Input cursor를 세팅해준다.

  render() {
    console.log('Rendering');
    return (
      <>
        <div>{this.state.first} * {this.state.second} = ? </div>
        <form onSubmit={this._onSubmit}>
          <input ref={this._onInputRef} type='number' value={this.state.value} onChange={this._onChange}/>
          <button>Insert!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default ClassApp;
