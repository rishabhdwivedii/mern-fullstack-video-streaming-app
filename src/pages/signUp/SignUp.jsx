import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="title">
        <div className="title">Welcome to Streaming App, Sign Up below.</div>
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
            onClick={async () => {
              try {
                const response = await axios.post(
                  "https://video-streaming-backend-seven.vercel.app/signup",
                  {
                    username,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                if (!response.status === 200) {
                  console.log(`HTTP error! Status: ${response.status}`);
                }
                localStorage.setItem("token", response.data.token);
                window.location = "/feed";
              } catch (error) {
                console.log("Error:", error);
              }
            }}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
