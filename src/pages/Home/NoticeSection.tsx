import React from "react";
import HTMLReactParser from "html-react-parser";

import { HomeContext } from "../../store/Context/HomeContext";

export default function NoticeSection() {
  const homePageData = React.useContext(HomeContext);
  const [index, setIndex] = React.useState<number>();

  const indexHandeler = () => {
    if (homePageData?.data?.homepage?.notice && typeof index === "number") {
      const noticeList = homePageData?.data?.homepage?.notice ?? [];
      const length = noticeList.length;

      const newIndex = Number(Number(index + 1) % length);
      if (newIndex || newIndex === 0) setIndex(newIndex);
    }
  };

  React.useEffect(() => {
    // Runs on first load when data is loaded
    if (homePageData?.data?.homepage?.notice && typeof index === "undefined") {
      setIndex(0);
    }
    //   Runs when data is loaded and index is a number
    if (homePageData?.data?.homepage?.notice && typeof index === "number") {
      setTimeout(() => {
        indexHandeler();
      }, 4000);
    }
  }, [index, homePageData]);

  React.useEffect(() => {
    console.log("Updated Index:", index);
  }, [index]);

  if (homePageData?.data?.homepage?.notice.length === 0) return <></>;

  return (
    <div className="notice-animation notice z-20   text-center text-base  font-semibold  bg-[#a2c2d1] w-full p-1 cursor-default">
      <div className="w-[90%] mx-auto">
        {homePageData.data?.homepage?.notice?.[Number(index)] ? (
          <div>
            {HTMLReactParser(
              homePageData.data?.homepage?.notice?.[Number(index)]?.notice
            )}
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
