import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    // In MoviesList.js, iterate through the movies object and create a dynamic Link for each movie using its id
    const renderMovies = Object.keys(movies).map((movieID) => (
      <li key={movieID}>
        <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
      </li>
    ));

    return <ul>{renderMovies}</ul>;
}

export default MoviesList;