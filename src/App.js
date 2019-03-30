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
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Muzi",
            poster: "https://cdn.clien.net/web/api/file/F01/5250965/b5a2711ac555423094e.GIF"
          },
          {
            title: "Apeach",
            poster: "https://item.kakaocdn.net/do/f43d6e06d6563b7409e38f05f6df3666617ea012db208c18f6e83b1a90a7baa7"
          },
          {
            title: "Prodo",
            poster: "http://mblogthumb4.phinf.naver.net/20150421_291/dke0622_1429591776419oq62k_PNG/%C7%C1%B7%CE%B5%B52.png?type=w2"
          },
          {
            title: "Con",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kbMzSGzdvp3KXSM0_gi9YDPcoWkSNwFwWffaEkFlZNCfdEYPdQ"
          },
          {
            title: "Ryan",
            poster: "https://i.pinimg.com/originals/94/4d/03/944d030fecf2a5d624dfdc5c9ef9f615.gif"
          }
        ]
      });
    }, 2000);
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
