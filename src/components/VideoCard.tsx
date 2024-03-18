import React from "react";
import { Link } from "react-router-dom";

interface Video {
  _id: string;
  thumbnail: string;
  video: string;
  title: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }: VideoCardProps) => {
  return (
    <Link to={`/videoPage/${video._id}`} className="cursor-pointer">
      <img
        className="w-[100%] rounded-[3%] overflow-hidden"
        src={`/${video.thumbnail}`}
        alt="Thumbnail"
      />
      <div className="text-lg leading-8 font-medium">{video.title}</div>
    </Link>
  );
};

export default VideoCard;
