import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "Up",
    poster : "https://static.rogerebert.com/uploads/review/primary_image/reviews/up-2009/hero_Up-2009.jpg"
  },
  {
    title : "Believer",
    poster : "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/fanzeel/f04f521eefdc418098eb12434ce96ea7.JPG"
  },
  {
    title : "Star Wars",
    poster : "https://file.mk.co.kr/meet/neds/2015/12/image_readtop_2015_1193248_14504095132280710.jpg"
  },
  {
    title : "The Avengers",
    poster : "https://www.enewstoday.co.kr/news/photo/201904/1291309_368979_5341.jpg"
  },

]

class App extends Component {
  render() {
    return (
      <div className="App">
          {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })}
      </div>
    );
  }
}

export default App;
