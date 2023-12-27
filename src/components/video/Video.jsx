import React from "react";
import "./video.css";
import VideoDetail from "../videoDetail/VideoDetail";

const Video = (props) => {
  return (
    <div className="video">
      <div className="video-player">
        <video controls width="100%" height="100%" src={props.propsValue} />
      </div>
      <div className="video-detail">
        <VideoDetail />
      </div>
    </div>
  );
};

export default Video;
