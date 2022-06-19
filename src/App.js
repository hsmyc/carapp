import "./App.css";
import Carform from "./components/Carform";
import Carlist from "./components/Carlist";
import WikiFetch from "./components/WikiFetch";

function App() {
  return (
    <div className="App">
      <div className="m-12 p-10 max-w-xl mx-auto rounded-xl shadow-lg">
        <p className="text-center text-4xl font-ubuntu">Droid Car App</p>
      </div>
      <Carform />
      <Carlist />
      <WikiFetch />
    </div>
  );
}

export default App;
