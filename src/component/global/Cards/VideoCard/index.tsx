import React from "react";
import ReactPlayer from "react-player";
import ModelCard from "../../Model";

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
  const [modelStatus, setModelStatus] = React.useState<boolean>(false);

  const modelClickHandler = () => {
    setModelStatus(!modelStatus);
  };

  return (
    <>
      <article
        onClick={modelClickHandler}
        className="grid rounded overflow-hidden border border-solid border-gray-100 cursor-pointer"
      >
        <div
          className={
            index % 2 == 0
              ? "mr-5  w-[450px] h-[400px] text-black rounded-md"
              : "mr-5  w-[450px] h-[400px] text-black rounded-md"
          }
        >
          <div className="h-[450px]  bg-gray-500 rounded-xl pointer-events-none">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={link}
            />
          </div>
          <div>
            {/* <h2 className="font-semibold text-xl">{title}</h2>
            <hr />
            <p>{createdDate.split("T")[0]}</p> */}
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
