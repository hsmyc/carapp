import { useState, useEffect } from "react";

import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Carlist() {
  const [cars, setCars] = useState(null);
  useEffect(() => {
    const ref = collection(db, "cars");
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setCars(results);
    });
  }, []);

  return (
    <div className=" p-2 m-auto mt-3 space-x-4 flex flex-wrap justify-center border-2 border-orange bg-gray font-ubuntu">
      {cars &&
        cars.map((car, index) => (
          <div key={car.id} c>
            <p>{index}</p>
            <h1>{car.brand}</h1>
            <p>{car.series}</p>
            <p>{car.year}</p>
          </div>
        ))}
    </div>
  );
}
