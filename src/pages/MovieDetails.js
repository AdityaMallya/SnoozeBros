import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./main.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const API_KEY = "f604d8a09cd9b354d86a3975cfb8b735";
    
    // Fetch Movie Details
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error("Error fetching movie details:", error));

    // Fetch Movie Trailer
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(response => {
        const officialTrailer = response.data.results.find(video => video.type === "Trailer");
        setTrailer(officialTrailer ? officialTrailer.key : null);
      })
      .catch(error => console.error("Error fetching trailer:", error));

    // Fetch Cast
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then(response => setCast(response.data.cast.slice(0, 6)))
      .catch(error => console.error("Error fetching cast:", error));

    // Fetch Similar Movies
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`)
      .then(response => setSimilarMovies(response.data.results.slice(0, 6)))
      .catch(error => console.error("Error fetching similar movies:", error));

  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
      />
      <p>{movie.overview}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>

      {/* Trailer */}
      {trailer && (
        <div className="trailer">
          <h2>Trailer</h2>
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${trailer}`} 
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Cast */}
      <div className="cast">
        <h2>Cast</h2>
        <div className="cast-list">
          {cast.map(actor => (
            <div key={actor.id} className="actor">
              <img 
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                alt={actor.name} 
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Movies */}
      <div className="similar-movies">
        <h2>Similar Movies</h2>
        <div className="movies-container">
          {similarMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
