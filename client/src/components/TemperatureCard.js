import React, { useState } from "react";
import "../components/TemperatureCard.css";

function TemperatureCard(props) {

  return (
    <div className="container">
      <div className="templable">Temperature</div>
      <div className='tempvalue' >
        {props.value}&deg;C
      </div>
    </div>
  );
}

export default TemperatureCard;
