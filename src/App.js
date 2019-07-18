import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'

function App() {
  return (
    <div className="App">
      <BarChart data={[5,10,1,3]} size={[500,500]} />
    </div>
  );
}

export default App;
