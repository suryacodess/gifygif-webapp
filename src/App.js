import { useEffect, useRef, useState } from "react";
import "./components/sass/style.css";

function App() {
  const [gif, setGif] = useState([]);
  const [searchQuery, setSearchQuery] = useState("search");
  const searchQ = useRef();
  const searchGif = () => {
    console.log(searchQuery);
    setSearchQuery(searchQ.current.value);
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=xil6kRlrRdGdYWb8OpOwxwgO9PsuU0wJ&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((Response) => Response.json())
      .then((response) => {
        // console.log(response.data);
        setGif(response.data);
      });
  }, [searchQuery]);

  return (
    <>
      <header className="header">
        <div className="title">
          <h1>GifyGif</h1>
        </div>
        <div className="gif-searchbar">
          <input type="text" ref={searchQ} placeholder="search" />
          <button onClick={() => searchGif(searchQuery)}>search</button>
        </div>
      </header>
      <main className="gif-section">
        {/*  */}
        {gif.map((gifs) => {
          return (
            <>
              <img key={Math.random()} src={gifs.images.original.url} alt={searchQuery}></img>
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
