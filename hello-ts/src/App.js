import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import UseEffect from './Components/UseEffect';
import MyComponent from './Components/MyComponent';
import UseContext from './Components/UseContext';
import Login from './Components/Login';
import Register from './Components/Register';


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
    </div>
  );
}

export default App;
