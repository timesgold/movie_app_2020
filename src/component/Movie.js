import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from "react-router-dom";

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // medium_cover_image
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link to={{pathname: '/movie-detail', state: {year, title, summary, poster, genres},}}
            >
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li className="movie__genre" key={index}>{genre}</li>;
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

export default Movie;