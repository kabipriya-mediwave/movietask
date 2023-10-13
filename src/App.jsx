import { useState, useEffect } from "react";
import "./App.css";
import { Home, MovieForm, NavigationBar } from "./components";
import { v4 as uuidv4 } from "uuid";

function setToLocalStorage(movies) {
  localStorage.setItem("My-IMDB", JSON.stringify(movies));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-IMDB")) || [];
}

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);

  useEffect(() => setMovies(getFromLocalStorage()), []);
  useEffect(() => {
    if (!movies) {
      setToLocalStorage(movies);
    }
  }, [movies]);

  function handleAddMovie(newMovie) {
    const updatedMovies = [{ id: uuidv4(), ...newMovie }, ...movies];
    setMovies(updatedMovies);
    setToLocalStorage(updatedMovies);
    setShowAddMovie(false);
  }
  return (
    <>
      <h1>My IMDB</h1>
      <NavigationBar setShowAddMovie={setShowAddMovie} />
      <main>
        {showAddMovie ? (
          <div className="formbackground-image">
            <div id="addMovie">
              <MovieForm onAddMovie={handleAddMovie} />
            </div>
          </div>
        ) : (
          <div id="home">
            <Home movies={movies} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
