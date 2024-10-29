"use client";

import ColorSwitch from "./ColorSwitch";
import LightSwitch from "./LightSwitch";
import { useState } from 'react';

export default function Home() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div>
      <div>
        <LightSwitch />
      </div>
      <div onClick={handleClickOutside}>
        <ColorSwitch  onChangeColor={handleChangeColor} />
        <br />
      <br />
      <h2>Clics en la página: {clicks}</h2>
      </div>
    </div>
  );
}
