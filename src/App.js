import React from 'react';
import './App.css';
import BarChart from './BarChart'
import TableRender from './TableRender'

function App() {
  return (
    <div className="App">
      <TableRender/>
    </div>
  );
}

export default App;

// <BarChart data={[5,10,1,3]} size={[500,500]} />
