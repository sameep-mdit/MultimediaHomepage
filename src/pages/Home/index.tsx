import MainWrapper from "../../Layout/MainWrapper";

import { HomeProvider } from "../../store/Context/HomeContext";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <HomeProvider>
      <MainWrapper>
        <LandingPage />
        <VideoSection />
      </MainWrapper>
    </HomeProvider>
  );
};

export default Home;
