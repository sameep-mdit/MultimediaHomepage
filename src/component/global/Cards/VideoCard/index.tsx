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

const VideoCard: React.FC<IVideocard> = ({ title, link  }) => {
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
        className="cursor-pointer border-solid border-3 border-gray-100 hover:border-yellow-300"
      >
        <div className="text-black grid">
          <div className="w-full h-60">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={link}
            />
          </div>
          <div
            className={`p-1 px-2 duration-200 ${
              isHover ? "bg-yellow-300 text-white" : "bg-gray-100 text-gray-600"
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
        <div className="z-50">
          <ReactPlayer width="90vw" height="90vh" controls url={link} />
        </div>
      </ModelCard>
    </>
  );
};

export default VideoCard;
