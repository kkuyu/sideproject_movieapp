import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

class App extends Component {
  // Component Lifecycle [https://reactjs.org/docs/react-component.html#the-component-lifecycle]
  // Render: componentWillMount() => render() => componentDidMount()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidMount()
  state = {
  }
  
  componentDidMount(){
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
