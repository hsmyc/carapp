import Carform from "./components/Carform";
import WikiFetch from "./components/WikiFetch";

function App() {
  return (
    <div className="App space-y-6 p-6 mx-auto font-ubuntu pt-3">
      <div className="m-12 p-10 max-w-xl mx-auto rounded-xl shadow-2xl bg-gray-dark">
        <p className="text-center text-4xl text-white">Droid Car App</p>
      </div>
      <Carform />
      <WikiFetch />
    </div>
  );
}

export default App;
