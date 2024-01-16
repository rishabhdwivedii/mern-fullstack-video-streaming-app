import React, { useEffect } from "react";
import "./sideFeed.css";
import VideoCard from "../videoCard/VideoCard";

export default function SideFeed() {
  const [videoFromBackend, setVideoFromBackend] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3001", {
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
  return (
    <div className="feeddd">
      {videoFromBackend.map((video, index) => (
        <div key={index} className="videoo">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}
