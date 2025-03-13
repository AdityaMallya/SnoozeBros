import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./main.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const API_KEY = "f604d8a09cd9b354d86a3975cfb8b735";
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    axios.get(URL)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error("Error fetching movies:", error));
  }, [page]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openMoviePopup = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMoviePopup = () => {
    setSelectedMovie(null);
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      setMessage(`${movie.title} added to Watchlist!`);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div>
      <h1>SnoozeBros - Popular Movies</h1>

      <input
        type="text"
        placeholder="Search movies..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {message && <p className="watchlist-message">{message}</p>}

      {filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="movies-container">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => openMoviePopup(movie)}>
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <button onClick={(e) => {
                e.stopPropagation();
                addToWatchlist(movie);
              }}>+ Watchlist</button>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      {/* Movie Details Popup */}
      {selectedMovie && (
        <div className="movie-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closeMoviePopup}>&times;</span>
            <h2>{selectedMovie.title}</h2>
            <img 
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} 
              alt={selectedMovie.title} 
            />
            <p>{selectedMovie.overview}</p>
            <p><strong>Rating:</strong> ⭐ {selectedMovie.vote_average.toFixed(1)}</p>
            <Link to={`/movie/${selectedMovie.id}`} className="details-link">
              View More Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
