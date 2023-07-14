import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";
import { CapitalizeFirst } from "../../utils/string";
import SectionWrapper from "../../Layout/SectionWrapper";
import SeeMoreCard from "../../component/global/Cards/SeeMore";
import { useViewportSize } from "@mantine/hooks";

const VideoSection = () => {
  const { width } = useViewportSize();
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div
      className="p-8 .leading-gradient-videoSection 
      grid gap-8"
    >
      <h1 className="pt-4 text-center  text-black text-3xl font-semi-bold hover:cursor-pointer">
        Videos
      </h1>

      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <SectionWrapper
            key={item.id}
            className={
              idx % 2 == 0
                ? " py-5 text-white h-[90vh] flex flex-col   "
                : "py-5 text-gray-700 h-[90vh] flex flex-col"
            }
          >
            <h2 className="text-2xl font-semibold mb-4">
              {CapitalizeFirst(item.name)}
            </h2>

            <Carousel
              align="start"
              slideGap="sm"
              slideSize={getCarouselPercentage(width)}
              styles={{
                control: {
                  "&[data-inactive]": {
                    opacity: 0,
                    cursor: "default",
                  },
                },
              }}
            >
              {item.videos.slice(0, 4).map((video: Video) => {
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
              {item.videos.length > 4 && (
                <Carousel.Slide>
                  {idx % 2 == 0 ? (
                    <SeeMoreCard dark link="/videos" label="See More" />
                  ) : (
                    <SeeMoreCard link="/videos" label="See More" />
                  )}
                </Carousel.Slide>
              )}
            </Carousel>
          </SectionWrapper>
        );
      })}
    </div>
  );
};

export default VideoSection;

export const getCarouselPercentage = (width: number) => {
  if (width > 1024) {
    return "33.333%";
  } else if (width > 768) {
    return "50%";
  } else if (width > 640) {
    return "100%";
  } else {
    return "100%";
  }
};
