import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {

  const [color, setColor] = React.useState("Onbekend");

  return (

      <div>
        <h1>State uitgelegd!</h1>
        <h3>De gekozen kleur is: {color}</h3>

        <button type="button" className="purple" onClick={ () => setColor("Paars")}>
          paars
        </button>

        <button type="button" className="red" onClick={ () => setColor("Rood")}>
          rood
        </button>

        <button type="button" className="pink" onClick={ () => setColor("Roze")}>
          roze
        </button>
      </div>

  );
}

export default App;
