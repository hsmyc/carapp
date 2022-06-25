import { useState, useEffect } from "react";

import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Carlist({ setCarmodel, visibleHandler }) {
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
    <div className="space-x-4 grid grid-cols-6 justify-center">
      {cars &&
        cars.map((car, index) => (
          <div
            key={car.id}
            className="border border-solid px-2 m-2 bg-gray-dark text-white col-span-1 text-center hover:border-orange drop-shadow-md rounded-md"
          >
            <button
              onClick={() => {
                setCarmodel(car.brand + car.series);
                setTimeout(()=>{
                  visibleHandler()
                }, 1000);
              }}
            >
              <p>{index}</p>
              <h1>{car.brand}</h1>
              <p>{car.series}</p>
              <p>{car.year}</p>
            </button>
          </div>
        ))}
    </div>
  );
}
