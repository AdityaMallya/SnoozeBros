import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/landing";
import Navbar from "./pages/Navbar";
import Watchlist from "./pages/Watchlist";
import About from "./pages/AboutPage";
import SubscriptionPage from "./pages/subs/subs";
import Contact from "./pages/contact/contact";
import MovieDetails from "./pages/MovieDetails";
import Signin from "./pages/signin";
import Footer from "./pages/footer";
import Sinup from "./pages/signup";

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/subs" element={<SubscriptionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sinup" element={<Sinup />} />
      </Routes>
    </Router>
  );
}

// Only show Navbar if NOT on Landing or Signin pages
const ConditionalNavbar = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/sign", "/sinup"];
  return !noNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
};

export default App;
