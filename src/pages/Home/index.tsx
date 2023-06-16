import MainWrapper from "../../Layout/MainWrapper";

import { HomeProvider } from "../../store/Context/HomeContext";
import BlogSection from "./BlogSection";
import ChannelSection from "./ChannelSection";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <HomeProvider>
      <MainWrapper>
        <LandingPage />
        <VideoSection />
        <BlogSection />
        <ChannelSection />
      </MainWrapper>
    </HomeProvider>
  );
};

export default Home;
