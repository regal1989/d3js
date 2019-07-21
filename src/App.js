import React, {useState} from 'react';
import './App.css';
import LineChart from './LineChart'
import PieClass from "./PieClass";
import RBarChart from "./RBarChart";
import * as d3 from "d3";

class App extends React.Component{
  constructor(props){
    super(props)
    this.changechart = this.changechart.bind(this)
    this.state = { chartvalue : "Pie" };
  }

  changechart = function(event){
    this.setState({chartvalue: event.target.value});
  }

  render() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const data = generateData();

  const linewidth = 500, lineheight = 350, linemargin = 20
  const Linedata = [
    {a: 1, b: 3},
    {a: 2, b: 6},
    {a: 3, b: 2},
    {a: 4, b: 12},
    {a: 5, b: 8}
  ]

  return (
    <div className="App">
      <div>
               <select id="chart" onChange={this.changechart} value={this.state.chartvalue}>
                  <option value="select">Select</option>
                  <option value="Pie">Pie</option>
                  <option value="RBar">Bar</option>
                  <option value="Line">Line</option>
               </select>
               <p></p>
               <p>{this.state.chartvalue}</p>
      </div>
      <div className={(this.state.chartvalue==='Pie' ? 'showbox' : 'hiddenbox')}>
        <PieClass
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div className={(this.state.chartvalue==='RBar' ? 'showbox' : 'hiddenbox')}>
        <RBarChart />
      </div>
      <div id="linePage" className={(this.state.chartvalue==='Line' ? 'showbox' : 'hiddenbox')}>
        <LineChart data={Linedata} width={linewidth} height={lineheight} margin={linemargin}/>
      </div>
    </div>
  );
}
}

export default App;
