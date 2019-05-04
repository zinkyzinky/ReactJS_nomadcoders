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

  /** render 할 때, (컴포넌트를 띄울 때) 아래와 같은 순서로 한다 */
  // Render : componentWillMount() -> render -> componentDidMount()
  
  /** 컴포넌트가 새로운 props를 받아 들였다. 
   * -> old props vs new props 비교해서 다르면 update == true 라고 인식 
   * -> 컴포넌트가 업데이트를 할 것 이다! 단계 
   */
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // componentWillUpdate() 이 순간에 로딩중 뱅글뱅글 돌아가겠지. spinner  
  // componentDidUpdate() (업데이트 이후에는) 돌고 있던 '로딩 중' 메세지나 아이콘을 숨기면 됨!! 
  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('Did mount');
  }


  render() {
    console.log('Render');
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
