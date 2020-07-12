import React, {Component} from 'react';
import axios from 'axios';
import Movie from "./../component/Movie";
import './Home.css';

class Home extends Component {
    state = {
        isLoading: true,
        movies: [],
    };

    // async 시간이 필요해
    getMovies = async () => {
        // await 기다려 줘
        // 구조적 분해 console.log(movies.data.data.movies);
        const {
            data: {
                data: {movies},
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        // 영화 데이터 로딩!
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return <section className="container">{isLoading ? (
            <div className="loader">
                <span className="loader__text">Loading...</span>
            </div>
        ) : (
            <div className="movies">
                {movies.map((movie) => {
                    return <Movie key={movie.id}
                                  poster={movie.medium_cover_image}
                                  summary={movie.summary}
                                  year={movie.year}
                                  title={movie.title}
                                  genres={movie.genres}
                    />
                })}
            </div>
        )}
        </section>;
    }
}

export default Home;