import './App.css';
import ReactSpeedometer from "react-d3-speedometer";
import React, { useState } from 'react'
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const pdata = [
  {
      name: 'm0',
      student: 11,
      fees: 120
  },
  {
      name: 'M',
      student: 15,
      fees: 12
  },
  {
      name: 'M2',
      student: 5,
      fees: 10
  },
  {
      name: 'M4',
      student: 10,
      fees: 5
  },
  {
      name: 'M3',
      student: 9,
      fees: 4
  },
  {
      name: 'M',
      student: 10,
      fees: 8
  },
];

function App() {
  const [volume, setVolume] = useState(1)
  const finalVolume = volume * 100
  const [volume2, setVolume2] = useState(1)
  const finalVolume2 = volume2 * 100
  

  return (
    <>
      <div class="main">
        <div class="left">
          <div className="header">
            <div class="A-Fram">
              <div class="text">----------------------A-FRAME(TON)----</div>
              <div className="Abtn">
                <button class="btn-agroup"><span>M2</span><br />0</button>
                <button class="btn-agroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-agroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-agroup"><span>M3</span><br />0</button>
                <button class="btn-agroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-agroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
              </div>

            </div>
            <div className="jlb">
              <div class="text">----------------------JIB(TON)----</div>
              <div className="jbtn">
                <button class="btn-jgroup"><span>M1</span><br />0</button>
                <button class="btn-jgroup"><span>M4</span><br />0</button>
                <button class="btn-jgroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-jgroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-jgroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
                <button class="btn-jgroup" style={{ opacity: "0.3" }}><span>M</span><br />0</button>
              </div>
            </div>

          </div>
          <div class="phase2">
            <h5>A-FRAME&JIB(TON)</h5>
            <div class="slide bar">
              <div class="Afram">
                <p>A-Frame</p>
                <input type="range" min={0} max={1} step={0.0002} value={volume} onChange={event => { setVolume(event.target.valueAsNumber) }}></input>
                <span>{finalVolume.toFixed(3)}</span>
              </div>
              <div class="JIB">
                <p>JIB</p>
                <input type="range" min={0} max={1} step={0.0002} value={volume2} onChange={event => { setVolume2(event.target.valueAsNumber) }}></input>
                <span>{finalVolume2.toFixed(3)}</span>
              </div>

            </div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
          </div>
          <div class="phase3">
            <div className="App" >

              <ReactSpeedometer maxSegmentLabels={5}
                segments={5}
                value={volume * 1000}
                startColor="#02ffa2"
                endColor="#1e2832"
                needleColor="#D8DEE9"
              />
              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
           
          </div>
      
        </div>
        <div class="right">

          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" title="Map" style={{ height: "800px", width: "100%" }}></iframe>
        </div>


      </div>
    </>
  );
}

export default App;
