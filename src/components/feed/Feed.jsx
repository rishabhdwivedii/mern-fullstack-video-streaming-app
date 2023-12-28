import React from "react";
import "./feed.css";
import VideoCard from "../videoCard/VideoCard";

const VIDEOS = [
  { title: "New video", image: "thumbnail.jpg" },
  { title: "New video", image: "thumbnail.jpg" },
  { title: "New video", image: "thumbnail.jpg" },
  { title: "New video", image: "thumbnail.jpg" },
  { title: "New video", image: "thumbnail.jpg" },
  { title: "New video", image: "thumbnail.jpg" },
];

const Feed = () => {
  return (
    <div className="feed">
      {VIDEOS.map((video) => (
        <div>
          {" "}
          <VideoCard title={video.title} image={video.image} />{" "}
        </div>
      ))}
    </div>
  );
};

export default Feed;
