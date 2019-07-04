import React, { Component, createRef} from 'react';
import Try from './try';

// 재사용 가능성이 있는 함수는 밖에다
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i=0; i<4; i++) {
    const randIndex = Math.floor(Math.random() * (9 - i));
    const chosen = candidates.splice(randIndex , 1)[0];
    array.push(chosen);
  }

  return array;
}

class ClassApp extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [] // {try, result}
  }
  input = createRef();

  _initState = () => {
    this.setState({
      value: '',
      answert: getNumbers(),
      tries: []
    }); 
  }

  _onSubmit = (event) => {
    const { value, tries, answer } = this.state
    event.preventDefault();

    if (value === answer.join('')) {
      this.setState({
        result: 'HOMERUN!!!'
      });

      alert('Restart game');
      this._initState();
    } else {
      if (tries.length >= 4) {
        this.setState({
          result: 'You wrong in 5 times. answer is ' + answer.join('')
        });
        alert('Restart game');
        this._initState();
      } else {
        const valueArray = value.split('').map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;

        for (let i=0; i<4; i++) {
          if (valueArray[i] === answer[i]) {
            strike ++;
          } else if (answer.includes(valueArray[i])) {
            ball ++;
          }
        } // 몇 strike, 몇 ball 인지 판단하는 로직

        this.setState((prevState) => {
          return {
            value: '',
            // state에 있는 value는 immutable 이여야 한다. react가 변화는 감지해서 렌더링 하는데 push를 써서 변하게 하면 변화를 감지 못한다.
            tries: [...prevState.tries, {try: value, result: strike + ' strike ' + ball + ' ball'}]
          }
        });
      }
      this.input.current.focus(); // Create ref 사용
    }
  }

  _onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <div>{this.state.answer}</div>
        <div>{result}</div>
        <form onSubmit={this._onSubmit}>
          <input ref={this.input} type='text' value={value} onChange={this._onChange}/>
          <button>Insert!</button>
        </form>
        <div>
          {/* map 함수, jsx 에서 반복문 사용시 key값을 꼭 넣어주어야 한다. */}
          {/* 단순히 index를 넣어주면 key를 기준으로 엘리먼트를 추가, 수정, 삭제 하는데 배열 순이 바뀌는 경우에 문제가 생길 수 있다. */}
          {tries.map((v, i) => {
            return (
              <Try key={v.try + v.result} tryInfo={v}></Try>
            )
          })}
        </div>
      </>
    );
  }
}

export default ClassApp;