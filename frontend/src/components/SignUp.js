import React, { useEffect } from "react";
import logo from "../img/logo.png";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends
          </p>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" />
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
