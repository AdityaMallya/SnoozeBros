import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Watchlist from "./pages/Watchlist";
import About from "./pages/AboutPage";
import Navbar from "./pages/Navbar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
