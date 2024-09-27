import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import "./Signin.css";

function Signin() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [userphno, setUserphno] = useState("");
  const [userage, setUserage] = useState("");
  const [usergender, setUsergender] = useState("");
  const [userexperience, setUserexperience] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/backend/user/createuser",
        {
          username,
          useremail,
          userpassword,
          userphno,
          userage,
          usergender,
          userexperience,
        }
      );

      alert(response.data.message);
      navigate("/redirect-path");
    } catch (err) {
      console.error("Error creating user:", err.message);
      setError("Error creating user. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login button clicked");
  };

  return (
    <div id="SignIn" className="secondoption">
      <form onSubmit={handleFormSubmit}>
        <h1>Sign Up Form</h1>

        {error && <div className="error-message">{error}</div>}

        <label htmlFor="user-name">Name</label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="user-email">Email</label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          required
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />

        <label htmlFor="user-password">Password</label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          required
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />

        <label htmlFor="user-phno">Phone Number</label>
        <input
          type="number"
          name="user-phno"
          id="user-phno"
          required
          value={userphno}
          onChange={(e) => setUserphno(e.target.value)}
        />

        <label htmlFor="user-age">Age</label>
        <input
          type="number"
          name="user-age"
          id="user-age"
          required
          value={userage}
          onChange={(e) => setUserage(e.target.value)}
        />

        <label htmlFor="user-gender">Gender</label>
        <select
          name="user-gender"
          id="usergender"
          value={usergender}
          onChange={(e) => setUsergender(e.target.value)}
        >
          <option value="" disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="user-experience">Experience</label>
        <select
          name="user-experience"
          id="userexperience"
          value={userexperience}
          onChange={(e) => setUserexperience(e.target.value)}
        >
          <option value="" disabled>What you have done so far?</option>
          <option value="Newbie">Newbie</option>
          <option value="Participated in school drives">Participated in school drives</option>
          <option value="Participated in college environmental drive">Participated in college environmental drive</option>
          <option value="Member of an environmental community">Member of an environmental community</option>
          <option value="Lead of an environmental community">Lead of an environmental community</option>
        </select>

        <p className="already-have">
          Already have an account? <Link to="/login">Click here</Link> to login
        </p>

        <button type="submit">Sign Up</button>

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