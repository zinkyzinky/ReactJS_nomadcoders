import React from 'react'; //  {Component} 이건 이제 없어도 되니까 제거!!
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

// class Movie extends Component{

//     /** 부모에게 받은 컴포넌트 정보 체크 가능!!
//      *  타입, 필수 체크등 
//      */
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string
//     }
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
        
//     }
// }

/** functional component 만들어보기 
 *  class 들은 그 안에 this 라는 키워드가 존재하므로, this.blahblah.... 가능하지만,
 *  functional component는 클래스형이 아니라서.. this.~~ 접근을 할 수가 없다. 이미 props 를 쓰니까!
*/
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                {/** this.props.poster 이라고 하면 에러!! 클래스가 아니니까!! */ }
                <MoviePoster poster={poster} alt={title}/>       
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)} 
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}


// 클래스형 컴포넌트 !
// class MoviePoster extends Component {
    
//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <img src={this.props.poster} alt="Movie Poster"/>
//         )
//     }
// }


// functional component (state 가 없고, props 만 존재하며, 그냥 return 을 하기 위한 존재일뿐일 때!!!)
// 그냥 1개의 props 만 있으면 됨. 1개!!! 1개의 props, 1개의 html 태그만 필요.
// function render 없고, 라이프 사이클 또한 없음. 그저 return 만 있음!
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

// 유효성? 규격 검사
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie
