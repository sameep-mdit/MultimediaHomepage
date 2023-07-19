import React from "react";
import BlogLayout from "../../Layout/BlogLayout";

import { HomeContext } from "../../store/Context/HomeContext";
import { bgColorGenerator } from "../../utils/color";
import PageWrapper from "../../Layout/PageWrapper";

const BlogSection = () => {
  const homePageData = React.useContext(HomeContext);
  const data = homePageData?.data?.homepage?.blogs;

  return (
    <PageWrapper className="text-white py-8">
      <div className="grid gap-8">
        {data?.map((item, index) => {
          return (
            <BlogLayout
              title={item.name}
              list={item.blogs}
              color={bgColorGenerator(item.color)}
            />
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default BlogSection;
