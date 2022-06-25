import { useState, useEffect } from "react";

export default function WikiF() {
  const [wiki, setWiki] = useState();
  useEffect(() => {
    fetch(
      "https://en.wikipedia.org/w/api.php?action=parse&prop=text&page=Volkswagen_Golf&format=json&origin=*"
    )
      .then((response) => response.json())
      .then((data) => setWiki(data));
  }, []);
  const wikiparse = (e) => {
    document.getElementById("wikiDiv").innerHTML = e.parse.text["*"];
  };
  wiki && wikiparse(wiki);

  return <div id="wikiDiv"></div>;
}
