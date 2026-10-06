//import { motion } from "motion/react";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [conte, setConte] = useState(0);

  function add() {
    setConte(conte + 1);
    console.log(conte);
  }

  function sub() {
    setConte(conte - 1);
    console.log(conte);
  }

  return (
    <div>
      <p>{conte}</p>
      <button className="rthathh" onClick={add}>
        ad
      </button>
      <button className="rtha" onClick={sub}>
        sub
      </button>
      <Cards />
    </div>
  );
}

export default App;
