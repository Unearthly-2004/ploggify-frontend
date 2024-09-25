import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa"; // Import Google icon
import axios from "axios";
import "./Signin.css"; // Assuming this is your CSS file

function Signin() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userphno, setuserphno] = useState("");
  const [userage, setuserage] = useState("");
  const [usergender, setusergender] = useState("");
  const [userexperience, setuserexperience] = useState("");
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

      // Assuming the response structure is { message, token }
      alert(response.data.message); // You can also use a toast library or a modal
      navigate("/redirect-path"); // Redirect upon successful submission
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError("Internal server error");
      alert("Error creating user. Please try again."); // Show an alert for error
    }
  };

  const handleGoogleLogin = () => {
    // You can integrate Google login functionality here
    console.log("Google login button clicked");
  };

  return (
    <div id="SignIn" className="secondoption">
      <form>
        <h1>Sign Up Form</h1>

        <label htmlFor="user-name">Name</label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          required
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />

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

        <label htmlFor="user-phno">Phone Number</label>
        <input
          type="number"
          name="user-phno"
          id="user-phno"
          required
          value={userphno}
          onChange={(e) => {
            setuserphno(e.target.value);
          }}
        />

        <label htmlFor="user-age">Age</label>
        <input
          type="number"
          name="user-age"
          id="user-age"
          required
          value={userage}
          onChange={(e) => {
            setuserage(e.target.value);
          }}
        />

        <label htmlFor="user-gender">Gender</label>
        <select
          name="user-gender"
          id="usergender"
          value={usergender}
          onChange={(e) => {
            setusergender(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="user-experience">Experience</label>
        <select
          name="user-experience"
          id="userexperience"
          value={userexperience}
          onChange={(e) => {
            setuserexperience(e.target.value);
          }}
        >
          <option value="" disabled selected>
            What you have done so far?
          </option>
          <option value="Newbie">Newbie</option>
          <option value="Participated in school drives">
            Participated in school drives
          </option>
          <option value="Participated in college environmental drive">
            Participated in college environmental drive
          </option>
          <option value="Member of an environmental community">
            Member of an environmental community
          </option>
          <option value="Lead of an environmental community">
            Lead of an environmental community
          </option>
        </select>

        <p className="already-have">
          Already have an account? <Link to="/login">Click here</Link> to login
        </p>

        <button onClick={handleFormSubmit}>Sign Up</button>

        {/* OR separator */}
        <div className="or">
          <p></p>
        </div>

        {/* Google Login Button */}
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
