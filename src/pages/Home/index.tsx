import React from "react";
import MainWrapper from "../../Layout/MainWrapper";
import { HomeContext } from "../../store/Context/HomeContext";
import { getHomePage } from "../../api/homepage";

const Home = () => {
  const HomeCtx = React.useContext(HomeContext);
  const [homepageData, setHomePageData] = React.useState();

  const homepageApi = async () => {
    const res = await getHomePage();
    console.log(res.data);
    setHomePageData(res?.data.homepage);
  };

  React.useEffect(() => {
    homepageApi();
  }, []);

  return (
    <HomeContext.Provider value={homepageData!}>
      <MainWrapper>
        <h1>Hello</h1>
      </MainWrapper>
    </HomeContext.Provider>
  );
};

export default Home;
