import { useState, useEffect } from "react";
import "./main.css";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  // Remove movie from watchlist
  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <div>
      <h1>Your Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="movies-container">
          {watchlist.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <button className="remove-btn" onClick={() => removeFromWatchlist(movie.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
