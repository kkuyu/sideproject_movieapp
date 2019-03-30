import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
        <div>
          <h1>Movie Component!!</h1>
          <strong>{this.props.title}</strong>
          <MoviePoster poster={this.props.poster} />
        </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
        <img src={this.props.poster} />
    );
  }
}

export default Movie;
