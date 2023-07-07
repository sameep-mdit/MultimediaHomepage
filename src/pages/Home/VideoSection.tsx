import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";
import { CapitalizeFirst } from "../../utils/string";
import SectionWrapper from "../../Layout/SectionWrapper";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div className="p-8 bg-gray-900 grid gap-8">
      <h1 className="pt-4 text-center  text-white text-3xl font-semi-bold hover:cursor-pointer">
        Videos
      </h1>

      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <SectionWrapper
            key={item.id}
            className={
              idx % 2 == 0
                ? "bg-gray-800 py-5 text-white h-[90vh] flex flex-col  "
                : "bg-white py-5 text-gray-700 h-[90vh] flex flex-col  "
            }
          >
            <h2 className="text-2xl font-semibold my-4">
              {CapitalizeFirst(item.name)}
            </h2>

            <Carousel
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
          </SectionWrapper>
        );
      })}
    </div>
  );
};

export default VideoSection;
