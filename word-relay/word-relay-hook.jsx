import React from 'react';
const { useState, useRef }  = React;

const WordRelay = () => {
  const [word, setWord] = useState('밤편지 훅스');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(''); // Hooks state 사용법
  const input = useRef(null); // Hooks ref 사용법

  const _onSubmit = (event) => {
    event.preventDefault();

    if (_isRelayedWord()) {
      // 기본 Class 에서는 setState 메소드를 이용하여 여러가지를 한번에 변경 할 수도 있었지만, Hooks에서는 아닙니다.
      setWord(value);
      setValue('');
      setResult('Correct');
    } else {
      setValue('');
      setResult('Wrong');
    }

    input.current.focus(); // Cursor를 옮겨준다.
  }

  const _isRelayedWord = () => {
    let resultLastWord = word[word.length - 1],
      valueFirstWord = value[0];

    return resultLastWord === valueFirstWord;
  }

  const _onChange = (event) => {
    // state 변경은 각각 해줘야 합니다.
    // 기본 Class 에서는 setState 메소드를 이용하여 여러가지를 한번에 변경 할 수도 있었지만, Hooks에서는 아닙니다.
    setValue(event.target.value);
  };

  console.log('Rendering !!');

  return (
    <>
      <div>{word}</div>
      <form onSubmit={_onSubmit}>
        <input ref={input} onChange={_onChange} type='text' value={value}/>
        <button>Insert!</button>
      </form>
      <div>{result}</div>
    </>
  )

}

export default WordRelay;
