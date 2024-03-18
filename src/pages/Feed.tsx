import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Feed = () => {
  const [videoFromBackend, setVideoFromBackend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BACKEND_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {videoFromBackend.map((video, _id) => (
        <div key={_id} className="p-4">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
