import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const Home = (props) => {
  const { movies } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    if (!searchTerm) {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(filtered);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    // Your search logic here
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const nextPage = () => {
    if (indexOfLastMovie < filteredMovies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="movie-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by movie title..."
        />
        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="movie-cards">
        {currentMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage <= 1}>
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastMovie >= filteredMovies.length}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;
