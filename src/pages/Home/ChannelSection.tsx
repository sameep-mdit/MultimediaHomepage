import { dummyHomePageData } from "../../constants/dummy/dummyData";
import ChannelCard from "../../component/global/Cards/ChannelCard";

const ChannelSection = () => {
  return (
    <section className="bg-white md:px-[20vh] mt-3">
      <h1 className="hover:cursor-pointer">Channels</h1>
      <hr />
      <div className="mt-2">
        {dummyHomePageData.homepage.channels.map((channel, idx) => {
          return (
            <ChannelCard
              key={idx}
              channelName={channel.name}
              imageurl=""
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cumque!"
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default ChannelSection;
