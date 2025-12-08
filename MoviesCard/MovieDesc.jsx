import React from "react";

function MovieDesc({ desc }) {
  return (
    <div className="border p-3 mt-2 bg-light rounded">
      <h5>Description</h5>
      <p>{desc}</p>
      
    </div>
  );
}

export default MovieDesc
