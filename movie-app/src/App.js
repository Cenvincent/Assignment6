import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Iron Man');

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const fetchMovies = async (query) => {
    const API_KEY = '9bc7d6fc';
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    try {
      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchInput.value;
    if (searchTerm) {
      setQuery(searchTerm);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>FinProH8</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="searchInput"
            placeholder="Search..."
          />
          <button type="submit">SEARCH</button>
        </form>
      </header>
      <h2>Show your favorite movies</h2>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default App;
