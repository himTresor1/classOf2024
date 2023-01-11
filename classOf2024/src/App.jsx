import { useState } from "react";
import "../src/App.css"
import Tresor from "./components/TRESOR/Tresor";
import Pacifiquem from "./components/Pacifiquem/Mpac";
import Kevin from "./components/Kevin/Kevin";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Tresor />
      <Kevin />
      {/* <Pacifiquem /> */}
    </div>
  );
}

export default App;
