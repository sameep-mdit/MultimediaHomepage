import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";

const LandingPage = () => {
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);
  return (
    <div className="h-[90vh] bg-[#0C2D48] text-white">
      {homePageData.data?.homepage.heading ? (
        <h1>{homePageData.data.homepage.heading}</h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LandingPage;
