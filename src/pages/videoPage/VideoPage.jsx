import React from "react";
import { useParams } from "react-router-dom";
import SideFeed from "../../components/sideFeed/SideFeed";
import "./videoPage.css";

export default function VideoPage() {
  const [videoFromBackend, setVideoFromBackend] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setVideoFromBackend(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
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
