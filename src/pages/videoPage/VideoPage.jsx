import React from "react";
import { Link, useParams } from "react-router-dom";
import { VIDEOS } from "../../videos";
import SideFeed from "../../components/sideFeed/SideFeed";
import "./videoPage.css";

export default function VideoPage() {
  const { id } = useParams();
  const selectedVideo = VIDEOS.find((video) => video.id.toString() === id);
  const videoTitle = selectedVideo ? selectedVideo.title : "Video Not Found";
  return (
    <div className="video-page">
      <div className="page">
        <div className="video-box">
          <video
            width={"100%"}
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <div className="title">{videoTitle}</div>
        </div>
        <div className="feedd">
          {VIDEOS.map((video) => (
            <Link to={`/video/${video.id}`} key={video.id}>
              <SideFeed video={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
