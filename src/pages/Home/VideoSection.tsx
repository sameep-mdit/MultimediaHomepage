import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { dummyHomePageData } from "../../constants/dummy/dummyData";
import VideoCard from "../../component/global/Cards/VideoCard";
import { Carousel } from "@mantine/carousel";
import { Video, Videos } from "../../api/video";
import { CapitalizeFirst } from "../../utils/string";
// import SectionWrapper from "../../Layout/SectionWrapper";
import SeeMoreCard from "../../component/global/Cards/SeeMore";
import { useViewportSize } from "@mantine/hooks";
import { bgColorGenerator } from "../../utils/color";
import PageWrapper from "../../Layout/PageWrapper";
import { Title } from "@mantine/core";

const VideoSection = () => {
  const { width } = useViewportSize();
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  console.log(dummyHomePageData.homepage.videos);
  return (
    <div
      className=".leading-gradient-videoSection 
      grid gap-2 py-8"
    >
      {homeCtx.data?.homepage.videos.map((item: Videos, idx) => {
        return (
          <PageWrapper key={item.id} className={bgColorGenerator(item.color)}>
            {/* className={`pt-8 ${
              index % 2 === 0
                ? "bg-gray-700 text-white"
                : "bg-gray-500 text-white"
            }`} */}

            <Title order={4} className="text-2xl font-semibold mb-8">
              {CapitalizeFirst(item.name)}
            </Title>

            <Carousel
              align="start"
              slideGap="xl"
              slideSize={GetCarouselPercentage(width)}
              slidesToScroll={3}
              controlSize={35}
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
          </PageWrapper>
        );
      })}
    </div>
  );
};

export default VideoSection;

export const GetCarouselPercentage = (width: number) => {
  if (width >= 1024) {
    return "33.333%";
  } else if (width >= 768) {
    return "50%";
  } else if (width >= 640) {
    return "100%";
  } else {
    return "100%";
  }
};

export const GetCarouselMaxScreens = (width: number) => {
  if (width >= 1024) {
    return 3;
  } else if (width >= 768) {
    return 2;
  } else if (width >= 640) {
    return 2;
  } else {
    return 1;
  }
};
