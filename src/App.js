import Carform from "./components/Carform";
import Carlist from "./components/Carlist";
import WikiFetch from "./components/WikiFetch";

function App() {
  return (
    <div className="App space-y-2 p-6 mx-auto font-ubuntu">
      <div className="m-12 p-10 max-w-xl mx-auto rounded-xl shadow-2xl bg-gray-dark">
        <p className="text-center text-4xl text-white">
          Droid Car App
        </p>
      </div>

      <Carlist />
      <WikiFetch />
      <Carform />
    </div>
  );
}

export default App;
