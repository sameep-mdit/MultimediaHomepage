import React from "react";
import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";
import { IBlogType } from "../../component/global/Blog/blog";
import BlogCardSmall from "../../component/global/Blog/BlogCardSmall";
import { Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { CapitalizeFirst } from "../../utils/string";
import SectionWrapper from "../SectionWrapper";
import { bgColorGenerator } from "../../utils/color";

type BlogLayoutType = {
  list?: IBlogType[];
  position?: "left" | "right";
  title?: string;
  color: string;
};

const firstBlog = "row-span-2 col-span-2 w-full";
const secondBlog = "col-span-3 w-full";
const thirdBlog = "col-span-3 w-full";

// React.useEffect(() => {
//   console.log(homePageData, "after fetched");
// }, [homePageData]);

const BlogLayout: React.FC<BlogLayoutType> = ({ list, title, color }) => {
  return (
    // <SectionWrapper className={bgColorGenerator(color)}>
    <div className="grid gap-6">
      {title && (
        <Title order={4} className="text-2xl font-semibold">
          {CapitalizeFirst(title)}
        </Title>
      )}
      <section className="grid gap-x-8 gap-y-8 grid-cols-5">
        {list?.map((item, index) => {
          const place = index + 1;
          return (
            <React.Fragment key={`${item}${index}`}>
              {place % 2 === 1 && place % 3 === 1 && (
                <div className={`${firstBlog}`}>
                  <Link to={"/blogs/" + item.blogId}>
                    <BlogCardLarge
                      blogId={item?.blogId}
                      description={item?.description}
                      createdDate={item?.createdDate}
                      title={item?.title}
                    />
                  </Link>
                </div>
              )}
              {place % 2 === 0 && place % 3 === 1 && (
                <div className={`${secondBlog}`}>
                  <Link to={"/blogs/" + item.blogId}>
                    <BlogCardSmall
                      blogId={item?.blogId}
                      description={item?.description}
                      createdDate={item?.createdDate}
                      title={item?.title}
                    />
                  </Link>
                </div>
              )}
              {place % 3 === 2 && place % 2 === 0 && (
                <div className={`${secondBlog}`}>
                  <Link to={"/blogs/" + item.blogId}>
                    <BlogCardSmall
                      blogId={item?.blogId}
                      description={item?.description}
                      createdDate={item?.createdDate}
                      title={item?.title}
                    />
                  </Link>
                </div>
              )}
              {place % 3 === 2 && place % 2 === 1 && (
                <div className={`${firstBlog}`}>
                  <Link to={"/blogs/" + item.blogId}>
                    <BlogCardLarge
                      blogId={item?.blogId}
                      description={item?.description}
                      createdDate={item?.createdDate}
                      title={item?.title}
                    />
                  </Link>
                </div>
              )}
              {place % 3 === 0 && (
                <div className={`${thirdBlog}`}>
                  <Link to={"/blogs/" + item.blogId}>
                    <BlogCardSmall
                      blogId={item?.blogId}
                      description={item?.description}
                      createdDate={item?.createdDate}
                      title={item?.title}
                    />
                  </Link>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>
    </div>
    // </SectionWrapper>
  );
};

export default BlogLayout;
