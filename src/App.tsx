import React from 'react';
import './App.css';
import Login from './component/login';
import { useAppSelector } from './redux/hooks/hook';
import { RootState } from './redux/index';
import _ from 'lodash';
import SiderDemo from './component/home/index';
function App() {
  let myLocalStorage  = window.localStorage;
  const data = useAppSelector((state:RootState) => state.userReducer);
  let userInfo = myLocalStorage.getItem('userInfo') || data.data;
  return (
    <div>
      {!_.isEmpty(userInfo) ? <SiderDemo />: <Login /> }
    </div>
  );
}

export default App;
