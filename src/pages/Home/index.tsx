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

const Home = () => {
  const homePageData = React.useContext(HomeContext);
  const data = homePageData?.data?.homepage?.blogs;
  console.log({ data });

  return (
    <div className="grid">
      <NavBar />
      <NoticeSection />
      <LandingPage />
      <VideoSection />
      <BlogSection />
      <ChannelSection />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default Home;
