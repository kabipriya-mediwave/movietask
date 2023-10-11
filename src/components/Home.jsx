import { useState } from "react";

const Home = (props) => {
  const { movies } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          id="movie-search"
          placeholder="Search by movie title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} id="search-button">
          Search
        </button>
      </div>
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {" "}
            {/* Add key prop */}
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>
              Rating:
              {(() => {
                const stars = [];
                for (let i = 0; i < Number(movie.rating); i++) {
                  stars.push(
                    <span key={i} className="star gold">
                      &#9733;
                    </span>
                  );
                }
                for (let i = Number(movie.rating); i < 5; i++) {
                  stars.push(
                    <span key={i} className="star">
                      &#9733;
                    </span>
                  );
                }
                return stars;
              })()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
