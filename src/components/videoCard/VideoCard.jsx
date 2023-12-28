import React from "react";
import "./videoCard.css";

const VideoCard = (props) => {
  return (
    <div className="videocard">
      <img src={props.image} alt="thumbnail" className="image" />
      <p>{props.title}</p>
    </div>
  );
};

export default VideoCard;
