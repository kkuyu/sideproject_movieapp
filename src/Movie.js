import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
        <div>
          <h1>Movie Component!!</h1>
          <MoviePoster />
        </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
    );
  }
}

export default Movie;
