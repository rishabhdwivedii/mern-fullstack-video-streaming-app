import React from "react";
import "./feed.css";
import VideoCard from "../../components/videoCard/VideoCard";
import { VIDEOS } from "../../videos";

const Feed = () => {
  return (
    <div className="feed">
      {VIDEOS.map((video, index) => (
        <div key={index} className="videoo">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
