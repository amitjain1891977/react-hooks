import React, { useState, useEffect, useContext } from 'react';
import randomcolor from 'randomcolor';
import { ColorContext } from "./ColorContext";
//import Counter from "./Counter";
//import UseRefHook from "./UseRefHook";
import UseCallbackHook from "./UseCallbackHook";
import './App.css';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [color, setColor] = useState('');
  const backgroundColors = useContext(ColorContext);

  function valueChange() {
    setCounterValue(previousCount => previousCount + 1);
  }

  useEffect(() => {
    setColor(randomcolor());
    document.title = `You changed counter color to ${color}`;
  }, [counterValue]);


  return (
    <div style={{ textAlign: "center", width: "30%", border: "5px solid black", marginTop: 30, marginLeft: 30, backgroundColor: backgroundColors.blue }}>
      <h1 style={{ color: color }}>{counterValue}</h1>
      <button style={{ height: 30, marginBottom: 20 }}
        onClick={valueChange}>Start Counter</button><br />

      {/* <Counter/> */}

      {/* <UseRefHook /> */}

      <UseCallbackHook />
    </div>

  );
}

export default App;
