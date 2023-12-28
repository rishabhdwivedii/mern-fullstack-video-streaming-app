import React from "react";
import "./videoCard.css";

const VideoCard = (props) => {
  return (
    <div>
      <img src={props.image} alt="thumbnail" />
      <p>{props.title}</p>
    </div>
  );
};

export default VideoCard;
