import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { SvgBlob } from "react-svg-blob";
import { baseUrl } from "../../constants/Strings";

const LandingPage = () => {
  console.log(baseUrl);
  const homePageData = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(homePageData, "after fetched");
  }, [homePageData]);
  return (
    <div className="h-[90vh] md:px-[20vh] w-full flex flex-col-reverse bg-white md:flex-row">
      <div className="flex-1 flex flex-col-reverse md:flex md:flex-row items-center">
        <div className="flex md:flex-col my-4  md:justify-evenly">
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
          className="hover:cursor-pointer w-full  h-full puff-in-center object-contain"
          image={`${baseUrl}/uploads/${homePageData.data?.homepage.photo}`}
          // image="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/315751126_1630743573990217_4323941406538844063_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uENCKo6uMmwAX8ffMSm&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBTWaDHjrB5LP-1gkdc2X-q3MN_aTind1WCU4gtC3angw&oe=648FB9B4"
          shapeProps={{ edges: 3, growth: 9, size: 400 }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
