import BlogLayout from "../../Layout/BlogLayout";
import React from "react";

import ContactPage from "../../component/global/Contact";
import { HomeContext } from "../../store/Context/HomeContext";

import NavBar from "../../component/global/Navbar";

import BlogSection from "./BlogSection";
import ChannelSection from "./ChannelSection";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";
import PageWrapper from "../../Layout/PageWrapper";
import FooterPage from "../../component/global/Footer";

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
        <div className="grid gap-4 py-12">
          <h1 className="  text-center text-gray-900 text-3xl font-semi-bold hover:cursor-pointer">
            Blogs
          </h1>
          {data?.map((item) => {
            return <BlogLayout title={item.name} list={item.blogs} />;
          })}
        </div>
      </PageWrapper>

      <ChannelSection />
      <ContactPage />
      <FooterPage />
    </>
  );
};

export default Home;
