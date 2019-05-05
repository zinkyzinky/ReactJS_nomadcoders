import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

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

  state = {
  }
  
  // state 를 직접 수정하면 리액트에서 지정된 render의 설정이 작동하지 않는다.
  // setState 로 업데이트하고, 업데이트할 때마다 render 이 작동할 것이다!! 새로운 state와 함께~~ 
  componentDidMount() {
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
  }

  // 영화리스트를 불러오는 함수 
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
          { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }

}

export default App;
