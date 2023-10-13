const SearchBar = (props) => {
  const { setSearchTerm, searchTerm } = props;
  const handleSearch = () => {
    console.log("clicked search");
  };
  return (
    <div className="search-container">
      <input
        type="text"
        id="movie-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by movie title..."
      />
      <button id="search-button" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default SearchBar;
