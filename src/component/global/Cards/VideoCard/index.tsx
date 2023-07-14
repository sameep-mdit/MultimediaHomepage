import React from "react";
import ReactPlayer from "react-player";
import ModelCard from "../../Model";
import { Text } from "@mantine/core";
import { CapitalizeFirst } from "../../../../utils/string";

type IVideocard = {
  title: string;
  desc: string;
  link: string;
  createdDate: string;
  index?: number;
};

const VideoCard: React.FC<IVideocard> = ({ title, link }) => {
  const [modelStatus, setModelStatus] = React.useState<boolean>(false);
  const [isHover, setIsHover] = React.useState(false);
  const modelClickHandler = () => {
    setModelStatus(!modelStatus);
  };

  return (
    <>
      <article
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={modelClickHandler}
        className="cursor-pointer"
      >
        <div className="text-white grid">
          <div className="w-full h-60 pointer-events-none">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={link}
            />
          </div>
          <div
            className={`p-1 px-2 font-semibold duration-100 ${
              isHover ? "text-zinc-900" : "text-white"
            }`}
          >
            <Text>{CapitalizeFirst(title)}</Text>
          </div>
        </div>
      </article>
      <ModelCard
        isActive={modelStatus}
        closeHandler={modelClickHandler}
        title={title}
      >
        <div className="z-50 ">
          <ReactPlayer width="90vw" height="90vh" controls url={link} />
        </div>
      </ModelCard>
    </>
  );
};

export default VideoCard;
