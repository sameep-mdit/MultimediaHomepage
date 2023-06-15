import MainWrapper from "../../Layout/MainWrapper";
import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";
import { HomeProvider } from "../../store/Context/HomeContext";
import LandingPage from "./LandingPage";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <HomeProvider>
      <MainWrapper>
        <LandingPage />
        <VideoSection />
        <BlogCardLarge/>
      </MainWrapper>
    </HomeProvider>
  );
};

export default Home;
