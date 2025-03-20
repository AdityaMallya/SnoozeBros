import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./landing.css";

const movies = [
  {
    title: "Pushpa-2",
    imageUrl:
      "https://cdn.123telugu.com/content/wp-content/uploads/2024/10/pushpa-2-1.jpg",
    description: "A thrilling movie",
  },
  {
    title: "Jawan",
    imageUrl: "https://reviewpuram.in/wp-content/uploads/2023/09/Jawan.jpg",
    description: "An action-packed movie",
  },
  {
    title: "Sita Ramam",
    imageUrl:
      "https://i0.wp.com/blog.shortfundly.com/wp-content/uploads/2022/08/sita-ramam-trailer-arriving-on_b_2107221013.jpg?resize=640%2C520&ssl=1",
    description: "A romantic drama",
  },
  {
    title: "Gaalipata-2",
    imageUrl:
      "https://kannadafilmlyrics.com/public/movies/posters/2022/Gaalipata%202/Gaalipata%202.jpg",
    description: "A comedy movie",
  },
  {
    title: "Stree-2",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
    description: "A horror movie",
  },
  {
    title: "Max",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/max-2024-et00383005-1735288835.jpg",
    description: "An action-thriller movie",
  },
];

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <p>Questions? Call 1-800-123-4567</p>
      <p>Privacy · Terms · Site Map · Netflix Originals</p>
    </footer>
  );
};

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (email.trim() !== "") {
      navigate(`/sign?email=${encodeURIComponent(email)}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <img src="/2.png" alt="Netflix Logo" className="logo" />
          <Link to="/sign">
            <button className="signin-button">Sign In</button>
          </Link>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>

          <div className="email-container">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      <section className="trending-container">
        <h2 className="trending-title">Trending Now</h2>
        <div className="trending-content">
          {movies.map((movie, index) => (
            <div key={index} className="trending-card">
              <div className="rank-number">{index + 1}</div>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="trending-thumbnail"
              />
              <div className="trending-overlay">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
