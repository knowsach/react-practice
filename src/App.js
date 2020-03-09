import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Welcome from './component/welcome';
import Counter from './component/counter';

function App() {
  return (
    <div className="App">
    {/* <Greet name='sachin singh'/> */}
    <Welcome message="Welcome"/>
    <Counter />
    </div>
  );
}

export default App;
