import { useState, useEffect } from "react";

export default function WikiFetch() {
  const [wiki, setWiki] = useState(null);

  useEffect(() => {
    async function doFetch() {
      const rsp = await fetch(
        "https://en.wikipedia.org/w/rest.php/v1/search/page?q=volkswagenPassat&limit=20",
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
  }, []);
  {
    wiki && console.log(wiki.pages[0]);
  }

  return <div>
  {wiki && <img src={wiki.pages[0].thumbnail.url} alt="thumb" />}
  <p>{wiki && wiki.pages[0].excerpt}</p>
  </div>;
}
