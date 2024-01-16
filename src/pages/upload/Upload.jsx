import React, { useState } from "react";
import "./upload.css";
import { useNavigate } from "react-router-dom";

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
          onClick={() => {
            fetch("http://localhost:3001/upload", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                title,
                thumbnail,
                video,
              }),
            }).then((res) =>
              res.json().then((data) => {
                console.log(data);
                alert("Video Uploaded Successfully!");
                navigate("/feed");
              })
            );
          }}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
