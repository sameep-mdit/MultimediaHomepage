import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";
import PageWrapper from "../../Layout/PageWrapper";
import { Text } from "@mantine/core";
import { CapitalizeFirst } from "../../utils/string";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div>
      <h1 className="  text-center bg-gray-800 text-white text-3xl font-semi-bold hover:cursor-pointer">
        Videos
      </h1>

      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <PageWrapper
            key={item.id}
            className={
              idx % 2 == 0
                ? "bg-gray-800 py-5 text-white h-[90vh] flex flex-col  "
                : "bg-white py-5 text-gray-700 h-[90vh] flex flex-col  "
            }
          >
            <div className="flex justify-between p-2">
              <h2 className="text-2xl font-thin p-2">{CapitalizeFirst(item.name)}</h2>
              <Text></Text>
            </div>

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
          </PageWrapper>
        );
      })}
    </div>
  );
};

export default VideoSection;
