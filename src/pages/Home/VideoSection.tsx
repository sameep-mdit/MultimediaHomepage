import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div>
      <h1 className="md:px-[20vh]">Videos</h1>
      {dummyHomePageData.homepage.videos.map((item, idx) => {
        return (
          <div
            key={item.id}
            className={
              idx % 2 == 0
                ? "bg-black py-5 text-white md:px-[20vh] "
                : "bg-white py-5 text-black md:px-[20vh]"
            }
          >
            <h2>{item.name}</h2>
            <div className="flex ">
              {item.videos.map((video) => {
                return (
                  <VideoCard
                    key={video.video_id}
                    title={video.title}
                    desc={video.description}
                    link={video.url}
                    createdDate={video.createdDate}
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSection;
