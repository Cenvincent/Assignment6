// src/components/Movie.js
import React from 'react';

const Movie = ({ movie }) => (
  <div className="movie">
    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'} alt={movie.Title} />
    <h3>{movie.Title}</h3>
  </div>
);

export default Movie;
