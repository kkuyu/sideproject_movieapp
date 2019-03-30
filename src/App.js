import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

const movieTitles = ["Muzi", "Apeach", "Prodo", "Con"];

const movieImages = [
  "https://cdn.clien.net/web/api/file/F01/5250965/b5a2711ac555423094e.GIF",
  "https://item.kakaocdn.net/do/f43d6e06d6563b7409e38f05f6df3666617ea012db208c18f6e83b1a90a7baa7",
  "http://mblogthumb4.phinf.naver.net/20150421_291/dke0622_1429591776419oq62k_PNG/%C7%C1%B7%CE%B5%B52.png?type=w2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kbMzSGzdvp3KXSM0_gi9YDPcoWkSNwFwWffaEkFlZNCfdEYPdQ"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
