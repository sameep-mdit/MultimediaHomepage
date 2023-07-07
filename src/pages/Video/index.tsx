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
import { Button, Collapse, Title } from "@mantine/core";

import { Video, Videos } from "../../api/video";
import VideoCard from "../../component/global/Cards/VideoCard";
import PageWrapper from "../../Layout/PageWrapper";
import { CapitalizeFirst } from "../../utils/string";

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
      <PageWrapper>
        {videos?.map((item, index) => {
          return (
            <VideoComponent
              index={index}
              item={item?.videos}
              itemName={item?.name}
            />
          );
        })}
      </PageWrapper>
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

  return (
    <>
      <section key={index} className="my-4 py-4">
        <Title order={3} className="font-semibold">
          {CapitalizeFirst(itemName as string)}
        </Title>
        <div className="flex justify-end mb-4"></div>

        <div className="grid md:grid-cols-3 gap-4">
          {item.slice(0, 3).map((video) => {
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
        </div>
        <Collapse in={opened}>
          <section className="grid md:grid-cols-3 gap-4 mt-8">
            {item.slice(4, item.length).map((video) => {
              return (
                <VideoCard
                  title={video.title}
                  key={video.video_id}
                  link={video.url}
                  desc={video?.description}
                  createdDate={video.createdDate}
                />
              );
            })}
          </section>
        </Collapse>
      </section>
      {item?.length >= 4 && (
        <div className="flex justify-center">
          <Button size="xs" color="dark" radius="lg" onClick={toggle}>
            See More
          </Button>
        </div>
      )}
    </>
  );
};
