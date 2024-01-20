import React, { useState } from "react";
import "./Signin.css";

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

        <button>SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
