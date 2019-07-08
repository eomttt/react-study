import React from 'react';
const { useState, useRef, useEffect } = React;

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

const RcpGame = () => {
  const [imageCoord, setImageCoord] = useState(rspCoords.rock);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const interval = useRef(null);

  // 첫 번째 인수는 함수 두 번째 인수는 변수인데, 이 두 번째 인수가 클로저 문제를 해결해 준다.
  // 즉, 두 번째 인수 배열에 넣은 값 들이 바뀔 때에 useEffect 가 실행된다.
  useEffect(() => { // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
    console.log('Restart');
    // useRef: Use .current
    interval.current = setInterval(changeHand, 500000);
    return () => { // componentWillUnmount 역할
      console.log('End');
      clearInterval(interval.current);
    }
  }, [imageCoord]);

  const changeHand = () => {
    if (imageCoord === rspCoords.rock) {
      setImageCoord(rspCoords.cissor);
    } else if (imageCoord === rspCoords.cissor) {
      setImageCoord(rspCoords.paper);
    } else if (imageCoord === rspCoords.paper) {
      setImageCoord(rspCoords.rock);
    }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);

    const userScore = scores[choice];
    const compScore = scores[computerChoice(imageCoord)];

    const scoreDiff = userScore - compScore;

    if (scoreDiff === 0) {
      setResult('Draw, Select: ' + choice);
    } else if (scoreDiff === 1 || scoreDiff === -2) {
      setResult('Win, Select: ' + choice);
      setScore((prevScore) => {
        return prevScore + 1;
      });
    } else {
      setResult('Loose, Select: ' + choice);
      setScore((prevScore) => {
        return prevScore - 1;
      });
    }

    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  }

  return (
    <>
      <div id="computer" style={{ backgroundImage: 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)', backgroundPosition: `${imageCoord} 0`}} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('cissor')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RcpGame;