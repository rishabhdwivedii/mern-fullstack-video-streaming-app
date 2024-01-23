import React, { useState } from "react";
import "./upload.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="title">Upload a new video!</div>
      <div className="card">
        Title:{" "}
        <input
          type="text"
          placeholder="Enter the title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}></input>
        <br />
        <br />
        Thumbnail:{" "}
        <input
          type="text"
          placeholder="Enter the thumbnail path"
          onChange={(e) => {
            setThumbnail(e.target.value);
          }}></input>
        <br />
        <br />
        Video:{" "}
        <input
          type="text"
          placeholder="Enter the video path"
          onChange={(e) => {
            setVideo(e.target.value);
          }}></input>
        <br />
        <br />
        <button
          onClick={async () => {
            try {
              const response = await axios.post(
                "https://video-streaming-backend-seven.vercel.app/upload",
                {
                  title,
                  thumbnail,
                  video,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              if (response.status !== 200) {
                console.log("Error occurred during fetching");
              }

              console.log(response.data);
              alert("Video Uploaded Successfully!");
              navigate("/feed");
            } catch (error) {
              console.log("Error", error);
            }
          }}>
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default Upload;
