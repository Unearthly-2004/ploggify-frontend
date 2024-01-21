import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");

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
        <p className="already-have">
          Don't have a account , <Link to="/signin">CLick here</Link> To Signin
        </p>
        <button>SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
