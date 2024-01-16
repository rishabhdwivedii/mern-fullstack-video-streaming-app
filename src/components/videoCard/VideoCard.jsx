import React from "react";
import { Link } from "react-router-dom";
import "./videoCard.css";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/videoPage/${video._id}`} className="video">
      <img className="thumbnail" src={`/${video.thumbnail}`} alt="Thumbnail" />
      <div className="title">{video.title}</div>
    </Link>
  );
};

export default VideoCard;
