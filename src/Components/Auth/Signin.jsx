import React from "react";
import { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
function Signin() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userphno, setuserphno] = useState("");
  const [userage, setuserage] = useState("");
  const [usergender, setusergender] = useState("");
  const [userexperience, setuserexperience] = useState("");
  return (
    <div id="SignIn">
      <form>
        <h1>Login Form</h1>
        <Link to="/login">already have a account ,login !!</Link>
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
          <option value="Female">Other</option>
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
          <option value="Participated in college envirnomental drive">
            Participated in college envirnomental drive
          </option>
          <option value="Member of any envirnomental community">
            Member of any envirnomental community
          </option>
          <option value="Lead of any envirnomental community">
            Lead of any envirnomental community
          </option>
        </select>
        <button>SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
