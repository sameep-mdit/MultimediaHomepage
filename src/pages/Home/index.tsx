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

  const dataTest = [
    { blogId: "1", description: "name", createdDate: null, title: " title" },
    { blogId: "2", description: "name", createdDate: null, title: " title" },
    { blogId: "3", description: "name", createdDate: null, title: " title" },

    { blogId: "4", description: "name", createdDate: null, title: " title" },

    { blogId: "5", description: "name", createdDate: null, title: " title" },

    { blogId: "6", description: "name", createdDate: null, title: " title" },

    { blogId: "7", description: "name", createdDate: null, title: " title" },

    { blogId: "8", description: "name", createdDate: null, title: " title" },

    { blogId: "9", description: "name", createdDate: null, title: " title" },
    { blogId: "1", description: "name", createdDate: null, title: " title" },
    { blogId: "2", description: "name", createdDate: null, title: " title" },
    { blogId: "3", description: "name", createdDate: null, title: " title" },

    { blogId: "4", description: "name", createdDate: null, title: " title" },

    { blogId: "5", description: "name", createdDate: null, title: " title" },

    { blogId: "6", description: "name", createdDate: null, title: " title" },

    { blogId: "7", description: "name", createdDate: null, title: " title" },

    { blogId: "8", description: "name", createdDate: null, title: " title" },

    { blogId: "9", description: "name", createdDate: null, title: " title" },
    { blogId: "1", description: "name", createdDate: null, title: " title" },
    { blogId: "2", description: "name", createdDate: null, title: " title" },
    { blogId: "3", description: "name", createdDate: null, title: " title" },

    { blogId: "4", description: "name", createdDate: null, title: " title" },

    { blogId: "5", description: "name", createdDate: null, title: " title" },

    { blogId: "6", description: "name", createdDate: null, title: " title" },

    { blogId: "7", description: "name", createdDate: null, title: " title" },

    { blogId: "8", description: "name", createdDate: null, title: " title" },

    { blogId: "9", description: "name", createdDate: null, title: " title" },
    { blogId: "1", description: "name", createdDate: null, title: " title" },
    { blogId: "2", description: "name", createdDate: null, title: " title" },
    { blogId: "3", description: "name", createdDate: null, title: " title" },

    { blogId: "4", description: "name", createdDate: null, title: " title" },

    { blogId: "5", description: "name", createdDate: null, title: " title" },

    { blogId: "6", description: "name", createdDate: null, title: " title" },

    { blogId: "7", description: "name", createdDate: null, title: " title" },

    { blogId: "8", description: "name", createdDate: null, title: " title" },
  ];

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
