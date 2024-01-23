import React, { useEffect, useState } from "react";
import axios from "axios";
import "./landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://video-streaming-backend-seven.vercel.app/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (response.status !== 200) {
          console.log("Error during fetch");
        }
        setUserExists(response.data.username);
      } catch (error) {
        console.log("Error fetch data:", error);
      }
    };
    fetchData();
  }, []);

  if (userExists) {
    return (
      <div className="landing-second">
        <div className="container-second">Welcome to Video Streaming App!</div>
        <div className="image-second">
          <img
            src="https://restream.io/blog/content/images/size/w2000/2022/10/best-live-streaming-apps.jpg"
            alt="Landing"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="landing">
      <div className="button-container">
        <div>Welcome to Video Streaming App!</div>
        <button
          onClick={() => {
            navigate("/signin");
          }}>
          Sign In
        </button>
        <button
          className="signup"
          onClick={() => {
            navigate("/signup");
          }}>
          Sign Up
        </button>
      </div>
      <div>
        <img
          className="image"
          src="https://restream.io/blog/content/images/size/w2000/2022/10/best-live-streaming-apps.jpg"
          alt="Landing"
        />
      </div>
    </div>
  );
};

export default Landing;
