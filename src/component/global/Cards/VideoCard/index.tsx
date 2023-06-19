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
          ? "mr-5  w-[450px] h-[400px] text-black rounded-md"
          : "mr-5  w-[450px] h-[400px] text-black rounded-md"
      }
    >
      <div className="  h-[450px]  bg-gray-500 rounded-xl">
        <ReactPlayer controls={true} width="100%" height="100%" url={link} />
      </div>
      <div className="flex flex-col py-4 px-5 gap-1 bg-gray-200 rounded-lg">
        <h2 className="font-semibold text-xl">{title}</h2>
        <hr />
        <p>{createdDate.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default VideoCard;
