import React from 'react';
import PropTypes from "prop-types";
import './Movie.css';

function Movie({title, poster}){
  return (
    <div>
      <h1>Movie Component!!</h1>
      <strong>{title}</strong>
      <MoviePoster poster={poster} />
    </div>
  );
}

function MoviePoster({poster}){
  return (
      <img src={poster} alt="" />
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
