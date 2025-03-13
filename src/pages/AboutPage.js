import "./main.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About SnoozeBros</h1>
      <p>
        SnoozeBros is your go-to place for browsing popular movies. We fetch data 
        from The Movie Database (TMDB) to bring you the latest and greatest films 
        to explore.
      </p>
      <p>
        This project was built using React and Axios to practice API requests 
        and React concepts.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Browse popular movies</li>
        <li>Search for your favorite films</li>
        <li>Pagination for more movies</li>
      </ul>
    </div>
  );
}

export default AboutPage;
