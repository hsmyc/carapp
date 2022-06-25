import { useState, useEffect, useRef } from "react";
import Carlist from "../components/Carlist";

export default function WikiFetch() {
  const carInfo = useRef(null);
  const [wiki, setWiki] = useState(null);
  const [carmodel, setCarmodel] = useState("ToyotaCorolla");
  useEffect(() => {
    async function doFetch() {
      const rsp = await fetch(
        `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${carmodel}&limit=20`,
        {
          "Api-User-Agent":
            "MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)",
        }
      );
      const data = await rsp.json();
      return data;
    }

    async function fetchAsync() {
      try {
        let result = await doFetch();
        setWiki(result);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchAsync();
  }, [carmodel]);

  const visibleHandler = () => {
    carInfo.current.className =
      "visible flex flex-row p-4 space-x-12";
  };

  return (
    <div className="container bg-gray-dark text-white shadow-2xl rounded-md p-4 space-x-3">
      <div className="col-auto">
        <Carlist setCarmodel={setCarmodel} visibleHandler={visibleHandler}/>
      </div>
      <div className="invisible flex flex-row p-4 space-x-12 " ref={carInfo}>
        {wiki && (
          <img
            src={wiki.pages[0].thumbnail.url}
            alt="thumb"
            className="basis-1/2"
          />
        )}
        <p className="basis-1/2"> {wiki && wiki.pages[0].excerpt}</p>
      </div>
    </div>
  );
}
