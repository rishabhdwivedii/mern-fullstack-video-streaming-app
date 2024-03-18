import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideFeed from "../components/SideFeed";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Video {
  _id: string;
  title: string;
  video: string;
}

export default function VideoPage() {
  const [videoFromBackend, setVideoFromBackend] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Video[]>(BACKEND_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status !== 200) {
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

  const { _id } = useParams<{ _id: string }>();
  console.log("Video ID from URL:", _id);
  const selectedVideo = videoFromBackend.find(
    (video) => video._id.toString() === _id
  );
  const videoTitle = selectedVideo ? selectedVideo.title : "Video Not Found";
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 pt-5 gap-4">
        <div className="col-span-12 md:col-span-9">
          {selectedVideo && (
            <video width={"100%"} controls src={`/${selectedVideo.video}`} />
          )}
          <div className="font-bold p-2 bg-slate-200">{videoTitle}</div>
        </div>
        <div className="col-span-12 md:col-span-3 overflow-y-auto h-[100vh]">
          <SideFeed />
        </div>
      </div>
    </div>
  );
}
