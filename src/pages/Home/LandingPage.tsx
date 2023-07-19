import React from "react";
import { Box, Button, Text, Title } from "@mantine/core";
import { Icon } from "@iconify/react";
import { HomeContext } from "../../store/Context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { baseUrl } from "../../constants/Strings";
import PageWrapper from "../../Layout/PageWrapper";

const LandingPage = () => {
  let color1 = "aqua",
    color2 = "red";
  const gradientStyle = {
    background: `linear-gradient(225deg, ${color1}, ${color2})`,
  };
  const submitIcon = () => {
    {
      homePageData?.data?.homepage?.social.map((item) => {
        return (
          <>
            {item.name}
            {item.url}
          </>
        );
      });
    }
  };

  console.log(baseUrl);
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData, "after fetched");
  }, [homePageData]);
  return (
    <div style={gradientStyle}>
      <PageWrapper>
        <div className="h-full sm:h-[90vh] w-full grid sm:grid-cols-5 md:flex-row gap-y-12 sm:gap-y-4 sm:gap-x-12">
          <div className="order-2 sm:order-1 sm:col-span-3 flex md:flex md:flex-row gap-8 items-center p-6 sm:p-0">
            <div className="flex  md:flex-col md:justify-evenly">
              <div
                className="grid gap-3"
                onClick={() => {
                  submitIcon();
                }}
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
                <FontAwesomeIcon icon={faYoutubeSquare} className="icon" />
              </div>
            </div>

            <div className="text-justify grid gap-6">
              <Title className="tracking-in-contract-bck text-6xl">
                {homePageData.data?.homepage.heading}
              </Title>

              <Text className="text-gray-800">
                {homePageData.data?.homepage.description}
              </Text>
              <a href="#contact-section">
                <Button
                  color="dark"
                  radius="md"
                  size="md"
                  className="mt-4 px-8"
                  leftIcon={<Icon icon="ic:round-contact-page" />}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 sm:order-2 sm:col-span-2 w-full h-[100px] sm:h-full flex items-center">
            <img
              className="w-full h-auto object-cover"
              src={`${baseUrl}/uploads/${homePageData.data?.homepage.photo}`}
              alt="hero-image"
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingPage;
