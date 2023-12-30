import React from "react";
import "./sideFeed.css";
import { VIDEOS } from "../../videos";
import VideoCard from "../videoCard/VideoCard";

export default function SideFeed({ video }) {
  return (
    <div className="feeddd">
      {VIDEOS.map((video, index) => (
        <div key={index} className="videoo">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}
