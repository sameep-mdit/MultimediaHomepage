import BlogLayout from "../../Layout/BlogLayout";
import React from "react";

import ContactPage from "../../component/global/Contact";
import { HomeContext } from "../../store/Context/HomeContext";

import FooterPage from "../../component/global/Footer";
import NavBar from "../../component/global/Navbar";

import BlogSection from "./BlogSection";
import ChannelSection from "./ChannelSection";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";
import PageWrapper from "../../Layout/PageWrapper";

const Home = () => {
  const homePageData = React.useContext(HomeContext);
  const data = homePageData?.data?.homepage?.blogs;
  console.log({ data });

  return (
    <>
      <NavBar />

      <LandingPage />
      <VideoSection />
      <BlogSection />
      <PageWrapper>
        {data?.map((item) => {
          return <BlogLayout title={item.name} list={item.blogs} />;
        })}
      </PageWrapper>

      <ChannelSection />
      <ContactPage />
      <FooterPage />
    </>
  );
};

export default Home;
