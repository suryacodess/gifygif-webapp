import { useEffect, useRef, useState } from "react";
import "./components/sass/style.css";
import Loader from "./components/Loader";

function App() {
  const [gif, setGif] = useState([]);
  const [searchQuery, setSearchQuery] = useState("anime");
  const [loading, setLoading] = useState(false);
  const searchQ = useRef();
  const searchGif = () => {
    let val = searchQ.current.value;
    if (val.length === 0) {
      alert("enter your query to get gifs.");
    } else {
      setSearchQuery(val);
      searchQ.current.value = " ";
      setLoading(true);
    }
  };

  const limit = 20;
  // const stickers = `https://api.giphy.com/v1/stickers/search?api_key=xil6kRlrRdGdYWb8OpOwxwgO9PsuU0wJ&q=${searchQuery}&limit=${limit}&offset=0&rating=pg&lang=en`;
  const gifs = `https://api.giphy.com/v1/gifs/search?api_key=xil6kRlrRdGdYWb8OpOwxwgO9PsuU0wJ&q=${searchQuery}&limit=${limit}&offset=0&rating=pg&lang=en`;

  useEffect(() => {
    fetch(gifs)
      .then((Response) => Response.json())
      .then((response) => {
        setGif(response.data);
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      <header className="header">
        <div className="title">
          <h1>GifyGif</h1>
        </div>
        <div className="gif-searchbar">
          <input id="input" type="text" ref={searchQ} placeholder="search" />
          <button onClick={() => searchGif(searchQuery)}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </header>
      {loading ? (
       <Loader />
      ) : (
        <main className="gif-section">
          <div className="gif-inner">
            {gif.map((gifs, i) => {
              return (
                <>
                  <div key={i} className="gif-img">
                    <img
                      id={i}
                      key={i}
                      src={gifs.images.original.url}
                      alt={searchQuery}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
}

export default App;
