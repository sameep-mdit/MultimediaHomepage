import { dummyHomePageData } from "../../constants/dummy/dummyData";
import ChannelCard from "../../component/global/Cards/ChannelCard";

const ChannelSection = () => {
  return (
    <section className="bg-white md:px-[20vh] ">
      {dummyHomePageData.homepage.channels.map((channel) => {
        return (
          <ChannelCard
            channelName={channel.name}
            imageurl=""
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cumque!"
            }
          />
        );
      })}
    </section>
  );
};

export default ChannelSection;
