import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import TemperatureCard from "./components/TemperatureCard";
import TemperatureChart from "./components/TemperatureChart";

function App() {

  const [temperatureValue, setTemperatureValue] = useState(70);

  useEffect(()=>{
    
  }, []);

  return (
    <div className="App">
      <TemperatureCard value={temperatureValue} />
      <TemperatureChart />
    </div>
  );
}

export default App;
