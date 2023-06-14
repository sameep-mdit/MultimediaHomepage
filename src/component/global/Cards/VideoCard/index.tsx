import React from "react";
import ReactPlayer from "react-player";

type IVideocard = {
  title: string;
  desc: string;
  link: string;
};

const VideoCard: React.FC<IVideocard> = ({ title, desc, link }) => {
  console.log(link, desc);
  return (
    <div className="mr-5 rounded">
      <div className="w-full h-54 pointer-events-none ">
        <ReactPlayer width="100%" height="100%" url={link} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default VideoCard;
