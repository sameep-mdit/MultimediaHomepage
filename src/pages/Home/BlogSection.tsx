import React from "react";
import BlogLayout from "../../Layout/BlogLayout";
import PageWrapper from "../../Layout/PageWrapper";
import { HomeContext } from "../../store/Context/HomeContext";

const BlogSection = () => {
  const homePageData = React.useContext(HomeContext);
  const data = homePageData?.data?.homepage?.blogs;

  return (
    <section className="grid gap-8 bg-gray-700 p-8">
      <h1 className="p-4 text-white text-center  text-3xl font-semi-bold hover:cursor-pointer">
        Blogs
      </h1>
      {data?.map((item, index) => {
        return (
          <BlogLayout
            title={item.name}
            list={item.blogs}
            theme={index % 2 ? "dark" : "white"}
          />
        );
      })}
    </section>
  );
};

export default BlogSection;
