import React from "react";

function Movielist({img, title, year, writer}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><strong>Year:</strong>{year}</p>
          
          <strong><p>{writer}</p></strong>
        </div>
      </div>
    </div>
  );
}

export default Movielist;
