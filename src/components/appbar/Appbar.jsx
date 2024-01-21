import { useNavigate } from "react-router-dom";
import "./appbar.css";
import { useEffect, useState } from "react";

const Appbar = () => {
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState(null);

  useEffect(() => {
    fetch("https://video-streaming-backend-seven.vercel.app/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      if (!res.ok) {
        return;
      }
      res.json().then((data) => {
        setUserExists(data.username);
      });
    });
  }, []);

  if (userExists) {
    return (
      <div className="appbar">
        <div>
          <button>Home</button>
          <button
            className="upload"
            onClick={() => {
              navigate("/upload");
            }}>
            Upload
          </button>
        </div>
        <div className="side">
          <div>{userExists}</div>
          <button
            className="signup"
            onClick={() => {
              localStorage.removeItem("token");
              window.location = "/";
            }}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appbar">
      <div>
        <button>Home</button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/signin");
          }}>
          Sign In
        </button>
        <button
          className="signup"
          onClick={() => {
            navigate("/");
          }}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Appbar;
