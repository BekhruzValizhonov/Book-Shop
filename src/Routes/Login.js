import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/reducers/userReducer";
import "./login.css";

function Login() {
  const [user, setUser] = useState({});
  let dispatch = useDispatch();
  let navigate = useNavigate(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "1111") {
      dispatch(userLogin(true));
      navigate("/createBook");
    } else {
      alert("Username or password incorrect");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username || ""}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password || ""}
          onChange={handleChange}
        />
        <div className="button">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
