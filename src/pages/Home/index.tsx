import MainWrapper from "../../Layout/MainWrapper";
import FooterPage from "../../component/global/Footer";

import { HomeProvider } from "../../store/Context/HomeContext";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <HomeProvider>
      <MainWrapper>
        <LandingPage />
        <VideoSection />
        <FooterPage />
      </MainWrapper>
    </HomeProvider>
  );
};

export default Home;
