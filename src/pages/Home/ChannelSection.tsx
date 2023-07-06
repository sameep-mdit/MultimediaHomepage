import ChannelCard from "../../component/global/Cards/ChannelCard";
import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { baseUrl } from "../../constants/Strings";
import { Link } from "react-router-dom";
import PageWrapper from "../../Layout/PageWrapper";
import { Text } from "@mantine/core";

const ChannelSection = () => {
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData, "after fetched");
  }, [homePageData]);

  return (
    <PageWrapper className="bg-gray-800 ">
      <section className=" grid gap-4">
        <h1 className="text-center text-white">Channels</h1>

        <div className="grid md:grid-cols-2  gap-4">
          {homePageData?.data?.homepage?.channels.map((channel, idx) => {
            return (
              <ChannelCard
                key={idx}
                channelName={channel.name}
                imageurl={channel.image}
                socials={channel?.socials.map((item) => {
                  return (
                    <>
                      <div>
                        <Text fz="sm" color="dark">
                          Links
                        </Text>
                        <div>
                          <Link to={item.url}>
                            <img
                              className="w-8"
                              src={
                                baseUrl + "/uploads/" + item?.logo
                                //blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
              />
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

export default ChannelSection;

{
  /* <div class="flex items-center">
  <img src="path/to/image.jpg">
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div> */
}
