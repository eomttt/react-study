import React from 'react';
const { useState, useRef } = React;

const ResponseCheckHook = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('Click to start.');
  const [result, setResult] = useState([]);

  const clickTimer = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      clickTimer.current = setTimeout(() => {
        setState('now');
        setMessage('Click now');
      }, Math.floor(Math.random() * 1000) + 2000); // Random 2~3 second

      startTime.current = new Date();

      setState('ready');
      setMessage('Click to when screen is green.');
    } else if (state === 'ready') {
      clearTimeout(clickTimer.current);

      setState('waiting');
      setMessage('So fast, Please click when screen is green.');
    } else if (state === 'now') {
      endTime.current = new Date();

      setState('waiting');
      setMessage('Click to start.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const renderAverage = () => {
    return result.length === 0 ? null : <><div>Average time: {(result.reduce((a, b) => a + b)) / result.length}</div></>
  }

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );
}

export default ResponseCheckHook;