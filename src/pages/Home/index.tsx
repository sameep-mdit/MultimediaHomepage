import React from "react";

import ContactPage from "../../component/global/Contact";
import { HomeContext } from "../../store/Context/HomeContext";

import NavBar from "../../component/global/Navbar";

import ChannelSection from "./ChannelSection";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";

import FooterPage from "../../component/global/Footer";
import BlogSection from "./BlogSection";
import NoticeSection from "./NoticeSection";
import MainWrapper from "../../Layout/MainWrapper";
import { Divider } from "@mantine/core";

const Home = () => {
  const homePageData = React.useContext(HomeContext);
  const data = homePageData?.data?.homepage?.blogs;
  console.log({ data });

  return (
    <div className="grid">
      <MainWrapper>
        <NoticeSection />
        <LandingPage />
        <VideoSection />
        <Divider />
        <BlogSection />
        <ChannelSection />
        <ContactPage />
      </MainWrapper>
    </div>
  );
};

export default Home;
