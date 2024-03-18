import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold mt-[3%] text-lg">Upload a new video!</div>
      <div className="w-2/5 bg-red-600 border-black border-8 p-4">
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
        <div className="flex justify-center">
          <button
            className="bg-white rounded-md font-medium p-2"
            onClick={async () => {
              try {
                const response = await axios.post(
                  BACKEND_URL + "/upload",
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
    </div>
  );
};

export default Upload;
