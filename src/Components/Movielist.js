import React from "react";

function Movielist(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.year}</p>
          <p className="card-text">{props.imdbID}</p>
          <strong><p>{props.writer}</p></strong>
        </div>
      </div>
    </div>
  );
}

export default Movielist;
