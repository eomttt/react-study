import React from 'react';
import Ball from './Ball';

const { useState, useRef, useEffect, useMemo, useCallback } = React;

const getWinNumbers = () => {
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

const LottoHook = () => {
  // useMemo is remind variable when changed second paramter
  // But this is [], so call once
  // If not around getWinNumbers by useMemo, getWinNumbers is call when every rerendering
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    console.log('Use Effect by timeouts current');

    setWinBallsTimers();
    return () => {
      console.log('Clear timeouts current');
      timeouts.current.map((v) => {
        clearTimeout(v);
      });
    }
  }, [timeouts.current]);
  // Call by componentDidMount, componentDidUpdate(When timeouts.current is changed), componentWillUnmount(return)

  useEffect(() => {
    console.log('Same with componentDidMount');
  }, []) // Same with componentDidMount because second parameter is []

  const setWinBallsTimers = () => {
    winNumbers.forEach((item, index) => {
      timeouts.current[index] = setTimeout(() => {
        if (index === winNumbers.length - 1) {
          setBonus(item);
          setRedo(true);
        } else {
          setWinBalls((prevWinBalls) => {
            return [...prevWinBalls, item]
          });
        }
      }, (index + 1) * 500)
    });
  }

  const setBonusNumber = () => {
    return (
      <>
        {!!bonus ? <Ball number={bonus}/> : null}
        {!!redo ? <button onClick={clickRedo}>Redo</button> : null}
      </>
    )
  }

  // useCallback is remind function when winNumbers revised
  const clickRedo = useCallback(() => {
    console.log('Click redo');
    console.log('Win numbers', winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>
        WinBalls
      </div>
      {
        winBalls.map((value) => {
          return <Ball key={value} number={value}/>
        })
      }
      <div>
        Bonus Ball
      </div>
      {setBonusNumber()}
    </>
  );
}

export default LottoHook;