import "./App.css";
import Carform from "./components/Carform";
import Carlist from "./components/Carlist";

function App() {
  return (
    <div className="App">
      <div className="m-12 p-10 max-w-xl mx-auto rounded-xl shadow-lg">
        <p className="text-center text-4xl font-ubuntu">Droid Car App</p>
      </div>
      <Carform />
      <Carlist />
    </div>
  );
}

export default App;
