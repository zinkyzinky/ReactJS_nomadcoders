import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{

    /** 부모에게 받은 컴포넌트 정보 체크 가능!!
     *  타입, 필수 체크등 
     */
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
        
    }
}

class MoviePoster extends Component {
    
    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.poster} alt=""/>
        )
    }
}

export default Movie
