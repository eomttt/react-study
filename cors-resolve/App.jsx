import React from 'react';
import axios from 'axios';

const { useState, useRef, useEffect, useMemo, useCallback } = React;

const App = () => {
  useEffect(() => {
    _getData();
  })

  const _getData = async() => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = 'https://api.liveconnect.in/backend/web/erpsync/get-all-orders?data=dbCode=UAT04M%7Cidx=100%7CuserId=6214%7Cres_format=1'; // site that doesn’t send Access-Control-*

      const respond = await axios.get(proxyurl + 'https://naver.com');
      console.log(respond);
    } catch(error) {
      console.log('Get data error. ' , error);
    }
  }

  return (
    <div>
      Hello CORS resolve app
    </div>
  )
};

export default App;
