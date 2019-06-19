import React from 'react';
const { useState, useRef }  = React;

const HooksApp = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState(''); // Hooks state 사용법
  const input = useRef(null); // Hooks ref 사용법

  const _onChange = (event) => {
    // state 변경은 각각 해줘야 합니다.
    // 기본 Class 에서는 setState 메소드를 이용하여 여러가지를 한번에 변경 할 수도 있었지만, Hooks에서는 아닙니다.
    setValue(event.target.value);
  };

  const _onSubmit = (event) => {
    event.preventDefault();
    if (first * second === parseInt(value)) {
      // 기본 Class 에서는 setState 메소드를 이용하여 여러가지를 한번에 변경 할 수도 있었지만, Hooks에서는 아닙니다.
      setResult(value + ' Correct');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');

      input.current.focus(); // Cursor를 옮겨준다.
    } else {
      setResult(value + ' Wrong');
      setValue('');

      input.current.focus();
    }
  }

  console.log('Rendering !!');

  return (
    <>
      <div>{first} * {second} = ? </div>
      <form onSubmit={_onSubmit}>
        <input ref={input} onChange={_onChange} type='number' value={value}/>
        <button>Insert!</button>
      </form>
      <div>{result}</div>
    </>
  )

}

export default HooksApp;
