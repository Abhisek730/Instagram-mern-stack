import React, { useEffect, useState } from "react";
import "./Profile.css";

export default function Profie() {
  const [pic, setPic] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        console.log(pic);
      });
  }, []);

  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        {/* profile-data */}
        <div className="pofile-data">
          <h1>Canta Coder</h1>
          <div className="profile-info" style={{ display: "flex" }}>
            <p>40 posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      <div className="gallery">
        {pic.map((pics) => {
          return <img key={pics._id} src={pics.photo} className="item"></img>;
        })}
      </div>
    </div>
  );
}
