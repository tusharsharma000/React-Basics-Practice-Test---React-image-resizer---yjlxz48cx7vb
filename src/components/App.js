import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  let [height, setheight] = useState(320);
  let [width, setwidth] = useState(320);
  const handleheightchange = (e) => {
    setheight(e.target.value);
  };
  const handlewidthchange = (e) => {
    setwidth(e.target.value);
  };
  return (
    <div id="main">
      <img
        src="./src/image.jpeg"
        id="resizable-img"
        height={height}
        width={width}
      />
      <br />
      <input
        type="range"
        id="height-slider"
        min={100}
        max={800}
        onChange={handleheightchange}
      />
      <br />
      <input
        type="range"
        id="width-slider"
        min={100}
        max={800}
        onChange={handlewidthchange}
      />
    </div>
  );
};

export default App;
