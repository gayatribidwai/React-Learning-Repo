import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import UseEffect from './Components/UseEffect';
import MyComponent from './Components/MyComponent';
import UseContext from './Components/UseContext';
import UseReducer from './Components/UseReducer';
import Login from './Components/Login';
import Register from './Components/Register';
import UseRef from './Components/UseRef';
import UseLayoutEffect from './Components/UseLayoutEffect';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <UseEffect/>
      <UseContext></UseContext>
      <div style = {{display : 'flex', gap : '10px', justifyContent : 'center'}}>
        <Login/>
        <Register/>
      </div>
      <UseReducer/>
      <UseRef/>
      <UseLayoutEffect/>
      <UseMemo/>
      <UseCallback/>
    </div>
  );
}

export default App;
