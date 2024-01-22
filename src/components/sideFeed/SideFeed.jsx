import React, { useEffect, useState } from "react";
import "./sideFeed.css";
import VideoCard from "../videoCard/VideoCard";
import axios from "axios";

export default function SideFeed() {
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

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(response.data);
        setVideoFromBackend(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
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
