import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { SvgBlob } from "react-svg-blob";

const LandingPage = () => {
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);
  return (
    <div className="bg-gray-300">
      <div className="h-[90vh] flex bg-[#0C2D48] text-white md:px-[10vh] items-center myclip-path">
        <div className="flex flex-col flex-1 h-full justify-around">
          <div>
            {homePageData.data?.homepage.heading ? (
              <h1 className="text-8xl mb-[3vh]">
                {homePageData.data.homepage.heading}
              </h1>
            ) : (
              <></>
            )}
            {homePageData.data?.homepage.heading ? (
              <p>{homePageData.data.homepage.description}</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            {homePageData.data?.homepage.social.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
        <div className="flex-1 flex justify-center ">
          <SvgBlob
            variant="solid"
            color="blue"
            // image=""
            shapeProps={{
              size: 600,
              growth: 5,
              edges:7,
            }}
            isOutline={false}
            className="hover:transform hover:rotate-45 hover:cursor-pointer transition ease-in-out delay-1500"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
