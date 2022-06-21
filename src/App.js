import {  useRef } from "react";
import Carform from "./components/Carform";

import WikiFetch from "./components/WikiFetch";

function App() {
  const carInfo = useRef(null);

  return (
    <div className="App space-y-2 p-6 mx-auto font-ubuntu">
      <div className="m-12 p-10 max-w-xl mx-auto rounded-xl shadow-2xl bg-gray-dark">
        <p className="text-center text-4xl text-white">Droid Car App</p>
      </div>

      <div className="visible" ref={carInfo}>
        <WikiFetch />
      </div>
      <Carform />
    </div>
  );
}

export default App;
