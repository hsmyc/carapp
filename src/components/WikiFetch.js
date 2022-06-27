import { useState, useEffect, useRef } from "react";
import Carlist from "../components/Carlist";
import axios from "axios";
export default function WikiFetch() {
  const carInfo = useRef(null);
  const [page, setPage] = useState(null);
  const [carmodel, setCarmodel] = useState("Toyota%20Corolla");
  useEffect(() => {
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${carmodel}`)
      .then((res) => setPage(res.data));
  }, [carmodel]);

  const visibleHandler = () => {
    carInfo.current.className = "visible p-4 space-x-12";
  };

  return (
    <div className="container bg-gray-dark text-white shadow-2xl rounded-md p-4 space-x-3">
      <div className="col-auto">
        <Carlist setCarmodel={setCarmodel} visibleHandler={visibleHandler} />
      </div>
      <div
        className="invisible"
        ref={carInfo}
      >
        <h1 className="basis-1/3 text-center text-4xl">
          {page && page.displaytitle}
        </h1>
        <div className="m-3 flex flex-row space-x-4">
          <img
            className="basis-1/2 sm:w-12 md:w-64 lg:w-100 xl:120 "
            src={page && page.originalimage.source}
            alt={page && page.description}
          />

          <p className="basis-1/2">
            {page && page.extract}
            {"    "}
            <a
              className=" border border-solid shadow-2xl rounded-md bg-blue"
              href={page && page.content_urls.desktop.page}
            >
              More..
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
