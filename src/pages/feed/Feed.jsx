import React, { useEffect, useState } from "react";
import "./feed.css";
import VideoCard from "../../components/videoCard/VideoCard";
import axios from "axios";

const Feed = () => {
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
          console.log("Error fetching data.");
        }
        console.log(response.data);
        setVideoFromBackend(response.data);
      } catch (error) {
        console.log("Error during fetching data:", error);
      }
    };
    fetchData();

    const intervalId = setInterval(async () => {
      await fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="feed">
      {videoFromBackend.map((video, _id) => (
        <div key={_id} className="videoo">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
