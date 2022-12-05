import { useState } from "react";
import "../src/App.css"
import Tresor from "./components/TRESOR/Tresor";
import Pacifiquem from "./components/Pacifiquem/Mpac";

function App() {
  return (
    <div className="App">
      <Tresor />
      <Pacifiquem />
    </div>
  );
}

export default App;
