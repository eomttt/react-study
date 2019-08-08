import React, { useState } from 'react';

const Container = ({submitLogin}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    submitLogin({
      id,
      password
    });
  }

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="email" value={id} onChange={onChangeId}/>
        <input type="password" placeholder="password" value={password} onChange={onChangePassword}/>
        <button>LOG IN</button>
      </form>
    </>
  );
};

export default Container;