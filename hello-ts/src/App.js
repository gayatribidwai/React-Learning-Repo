import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import UseEffect from './Components/UseEffect';
import MyComponent from './Components/MyComponent';


function App() {
  return (
    <div className="App">
      <MyComponent />
      <UseEffect/>
    </div>
  );
}

export default App;
