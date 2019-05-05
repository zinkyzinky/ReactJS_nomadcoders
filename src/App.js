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
  // .then() 앞에 지정된 작업이 (성공/실패 상관없이) 그냥 작업이 완료되면, thenㅇ르 부름 -> catch
  // 큰 componentDidMount 는 좋지 않음?! ㅋ
  componentDidMount() {

    this._getMovies();
    //  // --> 이전 작업 내용 callApi()로 이동!!
    // fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    // // .then(potato => console.log(potato))
    // // .then(response => console.log(response)) 변수명? 마음대로 작명 가능 ! 
    // .then(potato => potato.json())
    // // .then(json => {
    // //   this.setState({
    // //     movies: json.data.movies
    // //   }).then().then().... Callback hell!!!
    // // })
    // // 이렇게 쓰면 콜백지옥에 빠짐! -> 따로 함수로 빼서 적용해주기!!
    // .then(json => console.log(json))
    // .catch(err => console.log(err))
  }

  // 영화리스트를 불러오는 함수 
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />
    })
    return movies;
  }

  // async로 처리 ! 
  _getMovies = async () => {
    const movies = await this._callApi() 
    // 아래 소스는 callApi() 가 완료되지 않는 이상 실행되지 않을 것! 
    // await 는 해당 함수(this._callApi())가 '끝날 것'을 기다리고!!
    // '성공적인 수행'이 아니라 그저 완료!! 기다리고 return value를 담는다!!! 
    this.setState({
      // movies = movies 
      movies      // 위와 동일한 것! call api 의 return value!!
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies) // => arrow function 기능 자체에 return 이라는 뜻이 내재 되어있어서 return을 적을 필요가 없음!
    .catch(err => console.log(err))
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
