import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../../store/selectors/userEmail";
import { isUserLoading } from "../../store/selectors/isUserLoading.js";

const Landing = () => {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

  return (
    <div className="landing">
      {!userLoading && !userEmail && (
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
      )}
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
