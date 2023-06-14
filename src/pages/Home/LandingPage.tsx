import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { SvgBlob } from "react-svg-blob";

const LandingPage = () => {
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);
  return (
    <div className="h-[90vh] flex-wrap-reverse bg-[#003455] text-white flex flex-col-reverse md:px-[20vh] md:flex-row px-10">
      <div className="flex-1 flex  flex-col-reverse md:flex md:flex-row items-center">
        <div className="flex  md:flex-col my-4  md:justify-evenly">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            className="py-2 pr-2 hover:cursor-pointer  puff-in-center  "
          />
          <FontAwesomeIcon
            icon={faInstagramSquare}
            size="2x"
            className="py-2 pr-2 hover:cursor-pointer  puff-in-center "
          />
          <FontAwesomeIcon
            icon={faYoutubeSquare}
            size="2x"
            className="py-2 pr-2 hover:cursor-pointer puff-in-center "
          />
        </div>
        <div className="text-justify px-5 min-w-[360px]">
          <h1 className="tracking-in-contract-bck">
            {homePageData.data?.homepage.heading}
          </h1>

          <p className="">{homePageData.data?.homepage.description}</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ` md:w-auto">
        <SvgBlob
          variant="image"
          className="hover:cursor-pointer  h-full puff-in-center "
          image="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/126212254_1143698759361370_982448368751155537_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=0w4oPqwkaiYAX_Mck2A&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAKr9oRWS2RwWvRP3PcPk9ri20H5gUgFrurnz0I3jYleg&oe=64AFFF90"
          shapeProps={{ edges: 3, growth: 8, size: 340 }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
