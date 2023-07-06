import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";
import PageWrapper from "../../Layout/PageWrapper";
import { Text } from "@mantine/core";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div>
      <h1 className=" p-3 text-center text-black pt-12 font-bold hover:cursor-pointer">
        Videos
      </h1>

      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <PageWrapper
            key={item.id}
            className={
              idx % 2 == 0
                ? "bg-gray-800 py-5 text-white h-[90vh] flex flex-col pt-8 "
                : "bg-white py-5 text-black h-[90vh] flex flex-col pt-8 "
            }
          >
            <div className="flex justify-between p-4">
              <h2 className="text-3xl">{item.name}</h2>
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
