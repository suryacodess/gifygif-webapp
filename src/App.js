import { useEffect, useRef, useState } from "react";
import "./components/sass/style.css";

function App() {
  const [gif, setGif] = useState([]);
  const [searchQuery, setSearchQuery] = useState("search");
  const searchQ = useRef();
  const searchGif = () => {
    const val = searchQ.current.value;
    // if("search" === searchQuery ){
    //   alert("enter your query to get gifs.")
    // }

    // else{
    console.log(searchQuery);
    setSearchQuery(val);

    // }
  };

  const limit = 20;
  const stickers = `https://api.giphy.com/v1/stickers/search?api_key=xil6kRlrRdGdYWb8OpOwxwgO9PsuU0wJ&q=${searchQuery}&limit=${limit}&offset=0&rating=pg&lang=en`;
  const gifs = `https://api.giphy.com/v1/gifs/search?api_key=xil6kRlrRdGdYWb8OpOwxwgO9PsuU0wJ&q=${searchQuery}&limit=${limit}&offset=0&rating=pg&lang=en`;

  useEffect(() => {
    fetch(gifs)
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
        <div className="gif-inner">
          {gif.map((gifs) => {
            return (
              <>
                <div className="gif-img">
                  <img
                    key={Math.random()}
                    src={gifs.images.original.url}
                    alt={searchQuery}
                  ></img>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
