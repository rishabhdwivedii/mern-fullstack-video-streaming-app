import React from "react";
import { Link } from "react-router-dom";
import "./sideFeed.css";

export default function SideFeed({ video }) {
  return (
    <Link to={`/videoPage/1`} className="feeddd">
      <img className="thumbnail" src={video.thumbnail} alt="Thumbnail" />
      <div className="title">{video.title}</div>
    </Link>
  );
}
