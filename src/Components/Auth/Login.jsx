import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa"; // Using react-icons for Google Icon

function Signin() {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");

  const handleGoogleLogin = () => {
    // You can integrate Google login functionality here
    console.log("Google login button clicked");
  };

  return (
    <div id="SignIn">
      <form>
        <h1>Login Form</h1>

        <label htmlFor="user-email">Email</label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          required
          value={useremail}
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        />

        <label htmlFor="user-password">Password</label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          required
          value={userpassword}
          onChange={(e) => {
            setuserpassword(e.target.value);
          }}
        />

        <button type="submit">SignIn</button>

        <p className="already-have">
          Don't have an account? <Link to="/signup">Click here</Link> to sign up
        </p>
        <div className="or">
          <p></p>
        </div>
        <div className="google-login">
          <button type="button" onClick={handleGoogleLogin} className="google-btn">
            <FaGoogle className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
