import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div>
      <h1 className="md:px-[20vh] bg-black text-white pt-12 font-bold hover:cursor-pointer hover:underline">
        Videos
      </h1>

      

      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <div
            key={item.id}
            className={
              idx % 2 == 0
                ? "bg-black py-5 text-white md:px-[20vh] h-[90vh] flex flex-col pt-8 justify-around"
                : "bg-white py-5 text-black md:px-[20vh] h-[90vh] flex flex-col pt-8 justify-around"
            }
          >
            <h2 className="text-3xl">{item.name}</h2>

            <Carousel
              height={400}
              align="start"
              slideGap="sm"
              loop
              slideSize="33.333333%"
              withIndicators
            >
              {item.videos.map((video: Video) => {
                return (
                  <Carousel.Slide key={video.video_id}>
                    <VideoCard
                      title={video.title}
                      desc={video.description}
                      link={video.url}
                      createdDate={video.createdDate}
                      index={idx}
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSection;
