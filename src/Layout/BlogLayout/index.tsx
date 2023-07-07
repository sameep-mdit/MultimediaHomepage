import React from "react";
import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";
import { IBlogType } from "../../component/global/Blog/blog";
import BlogCardSmall from "../../component/global/Blog/BlogCardSmall";
import { Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { CapitalizeFirst } from "../../utils/string";
import SectionWrapper from "../SectionWrapper";

type BlogLayoutType = {
  list?: IBlogType[];
  position?: "left" | "right";
  title?: string;
  theme?: "dark" | "white";
};

const firstBlog = "row-span-2 col-span-2";
const secondBlog = "col-span-3";
const thirdBlog = "col-span-3";

const colors = {
  dark: "bg-gray-800 text-gray-100",
  white: "bg-white text-gray-900",
};

// React.useEffect(() => {
//   console.log(homePageData, "after fetched");
// }, [homePageData]);

const BlogLayout: React.FC<BlogLayoutType> = ({ list, title, theme }) => {
  if (!theme) theme = "white";
  console.log("LIST DATA", list);
  return (
    <SectionWrapper
      className={`${theme == "white" ? colors.white : colors.dark}`}
    >
      <div className="grid gap-4 pt-4">
        {title && (
          <Title order={4} className="text-2xl font-thin">
            {CapitalizeFirst(title)}
          </Title>
        )}
        <section className="grid gap-x-4 gap-y-4 grid-cols-5">
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
    </SectionWrapper>
  );
};

export default BlogLayout;
