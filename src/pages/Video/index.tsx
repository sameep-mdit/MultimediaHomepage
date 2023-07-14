// import React from "react";
// import { useParams } from "react-router";
// import { Video, Videos, getAllVideosCategoryById } from "../../api/video";
// import { Text } from "@mantine/core";
// import MainWrapper from "../../Layout/MainWrapper";
// import VideoCard from "../../component/global/Cards/VideoCard";

// const VideoPage = () => {
//   const params = useParams();
//   const id: string = params?.id!;
//   console.log("hello", id);
//   const [video, setVideo] = React.useState<Videos>();
//   const asyncSideEffect = async (id: string) => {
//     try {
//       const res = await getAllVideosCategoryById(id);
//       console.log("this response from the rewspne data ", res.data.videos);
//       setVideo(res.data.videos);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   React.useEffect(() => {
//     asyncSideEffect(id);
//   }, []);

//   return (
//     <MainWrapper>
//       <div className="md:px-[10vw]">
//         <Text className="text-4xl mb-4">Videos</Text>
//         <hr />

//         <Text className="text-3xl">{video?.name}</Text>
//         <div className="md:grid  flex flex-col  lg:grid-cols-3 overflow-y-scroll justify-center">
//           {video?.videos.map((video: Video) => {
//             return (
//               <div className="mb-40 slide-in-right ">
//                 <VideoCard
//                   title={video?.title}
//                   desc={video?.description}
//                   link={video?.url}
//                   createdDate={video?.createdDate}
//                   index={0}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </MainWrapper>
//   );
// };

// export default VideoPage;

import React from "react";

import { axiosInstance } from "../../config/axiosInstance";

import MainWrapper from "../../Layout/MainWrapper";

import { useDisclosure } from "@mantine/hooks";
import { Collapse, Title } from "@mantine/core";

import { Video, Videos } from "../../api/video";
import VideoCard from "../../component/global/Cards/VideoCard";
import PageWrapper from "../../Layout/PageWrapper";
import { CapitalizeFirst } from "../../utils/string";
import { Carousel } from "@mantine/carousel";
import PagesSeeMoreCard from "../../component/global/Cards/PagesSeeMore";

const VideoPage = () => {
  const [videos, setVideos] = React.useState<Videos[]>();

  const asyncSideEffect = async () => {
    try {
      const res = await axiosInstance.get("/get-all-videos-category");
      setVideos(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    try {
      console.log("hello");
      asyncSideEffect();
    } catch (error) {
      console.log("error");
    }
  }, []);

  return (
    <MainWrapper>
        {videos?.map((item, index) => {
          return (
            <PageWrapper
            className={`pt-8 ${
              index % 2 === 0
                ? "bg-gray-700 text-white"
                : "bg-gray-500 text-white"
            }`}
            >
            <VideoComponent
              index={index}
              item={item?.videos}
              itemName={item?.name}
            />
            </PageWrapper>
          );
        })}
    </MainWrapper>
  );
};

export default VideoPage;

type VideoLayoutType = {
  item: Video[];
  itemName?: string;

  index: number;
};
const VideoComponent = ({ index, item, itemName }: VideoLayoutType) => {
  const [opened, { toggle }] = useDisclosure(false);
  console.log({ opened });

  return (
    <>
      <section key={index} className="my-4 py-4">
        <Title order={3} className="font-semibold">
          {CapitalizeFirst(itemName as string)}
        </Title>
        {/* <div className="flex justify-end mb-4"></div> */}

        {!opened && (
          <div className="grid gap-4">
            <Carousel
              align="start"
              slideSize="33.333333%"
              slideGap="sm"
              styles={{
                control: {
                  "&[data-inactive]": {
                    opacity: 0,
                    cursor: "default",
                  },
                },
              }}
            >
              {item.slice(0, 4).map((video) => {
                return (
                  <Carousel.Slide key={video.video_id}>
                    <VideoCard
                      title={video.title}
                      link={video.url}
                      desc={video?.description}
                      createdDate={video.createdDate}
                    />
                  </Carousel.Slide>
                );
              })}
              {item.length > 4 && !opened && (
                <Carousel.Slide>
                  <PagesSeeMoreCard onClick={toggle} />
                </Carousel.Slide>
              )}
            </Carousel>
          </div>
        )}
        <Collapse in={opened}>
          <div className="grid gap-4 w-full h-full  sm:grid-cols-2 md:grid-cols-3">
            {item.map((video) => {
              return (
                <VideoCard
                  key={video.video_id}
                  title={video.title}
                  link={video.url}
                  desc={video?.description}
                  createdDate={video.createdDate}
                />
              );
            })}
            {<PagesSeeMoreCard onClick={toggle} label="See Less" />}
          </div>
        </Collapse>
      </section>
      {/* {item?.length >= 4 && (
        <div className="flex justify-center">
          <Button size="xs" color="dark" radius="lg" onClick={toggle}>
            See More
          </Button>
        </div>
      )} */}
    </>
  );
};
