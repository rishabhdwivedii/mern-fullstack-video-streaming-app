import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideFeed from "../../components/sideFeed/SideFeed";
import "./videoPage.css";
import axios from "axios";

export default function VideoPage() {
  const [videoFromBackend, setVideoFromBackend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://video-streaming-backend-seven.vercel.app/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (!response.status === 200) {
          console.log("Error occured.");
        }
        console.log(response.data);
        setVideoFromBackend(response.data);
      } catch (error) {
        console.log("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);

  const { _id } = useParams();
  console.log("Video ID from URL:", _id);
  const selectedVideo = videoFromBackend.find(
    (video) => video._id.toString() === _id
  );
  const videoTitle = selectedVideo ? selectedVideo.title : "Video Not Found";
  return (
    <div className="video-page">
      <div className="page">
        <div className="video-box">
          {selectedVideo && (
            <video width={"100%"} controls src={`/${selectedVideo.video}`} />
          )}
          <div className="title">{videoTitle}</div>
        </div>
        <div className="feedd">
          <div className="videoo">
            <SideFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
