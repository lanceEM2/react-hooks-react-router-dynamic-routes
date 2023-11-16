import React from "react";
import { useParams } from "react-router-dom";

// In MovieShow.js, import useParams; use the :movie_id from the params object to access the correct 
// movie from the movies object and display it on the page

function MovieShow({ movies }) {
    // call useParams to access the `params` from the url
    const params = useParams();
    console.log(params);

    return (
        <div>
            {/* And here we access the `movieId` stored in `params` to render
            information about the selected movie */}
            <h3>{movies[params.movieId].title}</h3>
        </div>
    );
}

export default MovieShow;