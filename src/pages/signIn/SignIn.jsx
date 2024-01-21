import React, { useState } from "react";
import "./signIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="title">
        <div className="title">Welcome Back! Sign In below.</div>
      </div>
      <div className="card">
        <div>
          Username:{" "}
          <input
            id="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          Password:{" "}
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
          <br></br>
          <br></br>
          <button
            onClick={() => {
              fetch("https://video-streaming-backend-seven.vercel.app/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username,
                  password,
                }),
              }).then((res) => {
                res.json().then((data) => {
                  localStorage.setItem("token", data.token);
                  window.location = "/feed";
                });
              });
            }}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
