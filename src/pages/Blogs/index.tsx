import { useParams } from "react-router-dom";
import MainWrapper from "../../Layout/MainWrapper";
import { axiosInstance } from "../../config/axiosInstance";
import React from "react";

const Blogpage = () => {
  const params = useParams();
  const category = params.category;
  const asyncSideEffect = async () => {
    try {
      const res = await axiosInstance.get(
        "/get-blog-by-id/942aaa04-e797-43d2-a830-bf4315a2983e"
      );
      console.log(res.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    console.log("first");
    asyncSideEffect();
  }, []);
  return (
    <MainWrapper>
      <div className="px-[20vh]">
        <h2>{category?.toUpperCase()}</h2>
      </div>
    </MainWrapper>
  );
};

export default Blogpage;
