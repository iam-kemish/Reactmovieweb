import React from "react";
import Movielist from "./Movielist";
import movies from "./movie.json";

function Movie() {
  return (
    <div className="container my-3">
      <div className="row my-5">
        {movies.map((element, index) => {
          return (
            <div className="col-md-4">
              <Movielist
                key={index}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
                writer="By Kemish Bajgai."
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
