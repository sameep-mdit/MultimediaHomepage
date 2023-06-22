import React from "react";
import { useParams } from "react-router";
import { Video, Videos, getAllVideosCategoryById } from "../../api/video";
import { Text } from "@mantine/core";
import MainWrapper from "../../Layout/MainWrapper";
import VideoCard from "../../component/global/Cards/VideoCard";

const VideoPage = () => {
  const params = useParams();
  const id: string = params.id!;
  const [video, setVideo] = React.useState<Videos>();
  const asyncSideEffect = async (id: string) => {
    try {
      const res = await getAllVideosCategoryById(id);
      console.log(res.data.videos);
      setVideo(res.data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    asyncSideEffect(id);
  }, []);

  return (
    <MainWrapper>
      
      <div className="md:px-[10vw]">
        <Text className="text-4xl mb-4">Videos</Text>
        <hr />
        
        <Text className="text-3xl">{video?.name}</Text>
        <div className="md:grid  flex flex-col  lg:grid-cols-3 overflow-y-scroll justify-center">
          {video?.videos.map((video: Video) => {
            return (
              <div className="mb-40 slide-in-right ">
                <VideoCard
                  title={video.title}
                  desc={video.description}
                  link={video.url}
                  createdDate={video.createdDate}
                  index={0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MainWrapper>
  );
};

export default VideoPage;
