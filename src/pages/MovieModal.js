import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./main.css";

function MovieDetails() {
  const { id } = useParams();  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "f604d8a09cd9b354d86a3975cfb8b735";
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,reviews`;

    axios.get(URL)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className="movie-details-img"
      />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>

      {/* Display Movie Cast */}
      <h3>Cast</h3>
      <div className="cast-container">
        {movie.credits?.cast.slice(0, 10).map((actor) => (
          <div key={actor.id} className="cast-card">
            <img 
              src={actor.profile_path 
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` 
                : "https://via.placeholder.com/100"}
              alt={actor.name}
              className="cast-img"
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>

      {/* Display Movie Trailer */}
      {movie.videos?.results.length > 0 && (
        <div className="trailer">
          <h3>Watch Trailer</h3>
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} 
            title="Movie Trailer"
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
