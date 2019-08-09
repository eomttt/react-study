import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from './actions';

import Component from './component';

const Container = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, isLoggedIn, loginDatas } = useSelector(state => state);

  useEffect(() => {
    console.log("is Logging In", isLoggingIn);
  }, [isLoggingIn === true]);

  useEffect(() => {
    console.log("is Logged In", isLoggedIn);
  }, [isLoggedIn]);

  console.log(loginDatas.length);

  useEffect(() => {
    console.log('login datas', loginDatas);
  }, [loginDatas])

  const submitLogin = (data) => {
   dispatch(actions.loginRequest(data));
  }

  return (
    <Component submitLogin={submitLogin} isLoggingIn={isLoggingIn} isLoggedIn={isLoggedIn}/>
  );
};

export default Container;