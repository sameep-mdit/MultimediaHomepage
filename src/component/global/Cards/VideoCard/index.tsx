import React from "react";
import ReactPlayer from "react-player";

type IVideocard = {
  title: string;
  desc: string;
  link: string;
  createdDate: string;
  index: number;
};

const VideoCard: React.FC<IVideocard> = ({
  title,
  link,
  createdDate,
  index,
}) => {
  return (
    <div
      className={
        index % 2 == 0
          ? "mr-5 rounded w-[350px] h-[360px] text-white"
          : "mr-5 rounded w-[350px] h-[360px] text-black"
      }
    >
      <div className=" h-4/5 pointer-events-none">
        <ReactPlayer width="100%" height="100%" url={link} />
      </div>
      <div className="flex flex-col p-2 gap-1">
        <h4>{title}</h4>
        <hr />
        <p>{createdDate.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default VideoCard;
