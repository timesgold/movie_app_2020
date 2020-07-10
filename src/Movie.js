import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // medium_cover_image
};

function Movie({id, year, title, summary, poster}) {
    return (
        <div className="movie__data">
            <img src={poster} alt={title} title={title}/>
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    );
}

export default Movie;