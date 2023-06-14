import React from "react";
import { HomeContext } from "../../store/Context/HomeContext";

const VideoSection = () => {
  const homeCtx = React.useContext(HomeContext);
  React.useEffect(() => {}, [homeCtx]);
  return (
    <div className="h-[100vh]  md:px-[20vh] bg-[white]">
      <h1 className="hover:cursor-pointer">Videos</h1>
      <h2 className="text-2xl hover:cursor-pointer">{"Entertainment"}</h2>
      {["item1"].map((item: string, idx: number) => {
        return <div key={idx}>{item}</div>;
      })}
    </div>
  );
};

export default VideoSection;
