import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  return (
    <div className="h-[100vh]  md:px-[20vh] bg-[white]">
      <h1 className="hover:cursor-pointer">Videos</h1>
      {homeCtx.data?.homepage.videos.map((item) => {
        return (
          <div>
            <h2 className="text-xl">{item.name}</h2>
            {item["videos"].map((video: any) => {
              return <p>{video.title}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default VideoSection;
