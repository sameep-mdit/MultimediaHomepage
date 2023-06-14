import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import VideoCard from "../../component/global/Cards/VideoCard";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  return (
    <div className="h-[100vh]  md:px-[20vh] bg-[#fff7ed]">
      <h1 className="hover:cursor-pointer">Videos</h1>
      {homeCtx.data?.homepage.videos.map((item, idx) => {
        return (
          <div key={idx}>
            <h2 className="text-xl mb-3">{item.name}</h2>
            <div className="flex">
              {item["videos"].map((video: any) => {
                return (
                  <VideoCard
                    key={video.video_id}
                    title={video.title as string}
                    desc={video.description}
                    link={video.url}
                  />
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default VideoSection;
