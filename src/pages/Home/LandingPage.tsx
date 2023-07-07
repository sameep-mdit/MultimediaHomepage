import React from "react";
import { Carousel } from "@mantine/carousel";
import { Button, createStyles, getStylesRef } from "@mantine/core";
import { Icon } from "@iconify/react";
import { HomeContext } from "../../store/Context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Parser from "html-react-parser";

import { baseUrl } from "../../constants/Strings";
import PageWrapper from "../../Layout/PageWrapper";

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));
const LandingPage = () => {
  const { classes } = useStyles();
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
    <>
      <Carousel classNames={classes} dragFree slideGap="none" align="center">
        {homePageData.data?.homepage?.notice?.map((item) => {
          return (
            <Carousel.Slide>
              <div className="text-center text-xs font-semibold bg-yellow-200 w-full p-1 cursor-default">
                {Parser(item?.notice)}
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <PageWrapper>
        <div className="h-[90vh]  w-full flex flex-col-reverse bg-white md:flex-row">
          <div className="flex-1 flex flex-col-reverse md:flex md:flex-row items-center">
            <div className="flex md:flex-col   md:justify-evenly">
              <div
                onClick={() => {
                  submitIcon();
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2x"
                  className="py-2 pr-2 hover:cursor-pointer  puff-in-center  "
                />
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  size="2x"
                  className="py-2 pr-2 hover:cursor-pointer  puff-in-center "
                />
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  size="2x"
                  className="py-2 pr-2 hover:cursor-pointer puff-in-center "
                />
              </div>
            </div>
            <div className="text-justify px-5  ">
              <h1 className="tracking-in-contract-bck text-6xl mb-4">
                {homePageData.data?.homepage.heading}
              </h1>

              <p className="">{homePageData.data?.homepage.description}</p>
              <a href="#contact-section">
                <Button
                  color="dark"
                  radius="md"
                  size="md"
                  className="mt-8 px-8"
                  leftIcon={<Icon icon="ic:round-contact-page" />}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center ` md:w-auto">
            <img
              className="w-full md:w-2/3 h-[80vh] md:h-[60vh] object-cover"
              src={`${baseUrl}/uploads/${homePageData.data?.homepage.photo}`}
              alt="hero-image"
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default LandingPage;
