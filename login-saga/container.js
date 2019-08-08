import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from './actions';

import Component from './component';

const Container = () => {
  const dispatch = useDispatch();

  const submitLogin = (data) => {
   dispatch(actions.loginRequest(data));
  }

  return (
    <Component submitLogin={submitLogin}/>
  );
};

export default Container;