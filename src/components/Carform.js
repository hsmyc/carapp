import { db } from "../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Carform() {
  const submitHandler = (e) => {
    e.preventDefault();
    const ref = collection(db, "cars");
    const docRef = doc(ref);
    const data = {
      brand: e.target.brand.value,
      series: e.target.series.value,
      year: e.target.year.value,
    };
    setDoc(docRef, data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <div className="container justify-center">
      <form onSubmit={submitHandler}>
        <label>Brand</label>
        <input
          className="shadow-inner p-1 m-1  bg-gray-dark text-white"
          type="text"
          name="brand"
        />
        <label>Series</label>
        <input
          className="shadow-inner p-1 m-1  bg-gray-dark text-white"
          type="text"
          name="series"
        />
        <label>Year</label>
        <input
          className="shadow-inner p-1 m-1  bg-gray-dark text-white"
          type="number"
          name="year"
        />
        <button
          type="submit"
          className="rounded-xl bg-gray-dark text-white hover:border hover:border-orange hover:shadow-2xl p-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
