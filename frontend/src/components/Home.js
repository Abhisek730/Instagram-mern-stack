import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h5>Ramesh</h5>
        </div>
        {/* card image */}
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        {/* card content */}
        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>This is amazing </p>
        </div>

        {/* add Comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type="text" placeholder="Add a comment" />
          <button className="comment">Post</button>
        </div>
      </div>
    </div>
  );
}
