import React from "react";

import { Blogs, blogType } from "../../api/blog";
import { axiosInstance } from "../../config/axiosInstance";

import MainWrapper from "../../Layout/MainWrapper";

import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";

import { useDisclosure } from "@mantine/hooks";
import { Collapse, Title } from "@mantine/core";

import { Link } from "react-router-dom";
import { CapitalizeFirst } from "../../utils/string";
import PageWrapper from "../../Layout/PageWrapper";

import { Carousel } from "@mantine/carousel";
import PagesSeeMoreCard from "../../component/global/Cards/PagesSeeMore";

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState<blogType[]>();

  const asyncSideEffect = async () => {
    try {
      const res = await axiosInstance.get("/get-all-blogs-category");
      setBlogs([...res.data.data, ...res.data.data]);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    try {
      console.log("hello");
      asyncSideEffect();
    } catch (error) {
      console.log("error");
    }
  }, []);

  return (
    <MainWrapper>
      {blogs?.map((item, index) => {
        return (
          <PageWrapper
            className={`pt-8 ${
              index % 2 === 0
                ? "bg-gray-700 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            <BlogComponent
              index={index}
              item={item?.blogs}
              itemName={item?.name}
            />
          </PageWrapper>
        );
      })}
    </MainWrapper>
  );
};

export default BlogPage;

type BlogLayoutType = {
  item: Blogs[];
  index: number;
  itemName?: string;
};

const BlogComponent = ({ item, index, itemName }: BlogLayoutType) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <div className="flex justify-between mb-4">
        <Title order={3}>{CapitalizeFirst(itemName as string)}</Title>
      </div>
      {!opened && (
        <div className="grid  gap-4">
          <Carousel
            align="start"
            slideSize="33.333333%"
            slideGap="sm"
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            {item.slice(0, 4).map((blog, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Link to={"/blogs/" + blog.blogId}>
                    <BlogCardLarge
                      title={blog.title}
                      description={blog.description}
                      createdDate={blog.createdDate}
                    />
                  </Link>
                </Carousel.Slide>
              );
            })}
            {item.length > 4 && !opened && (
              <Carousel.Slide>
                <PagesSeeMoreCard onClick={toggle} />
              </Carousel.Slide>
            )}
          </Carousel>
        </div>
      )}

      {/* from this we seperate */}

      <Collapse in={opened}>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {item.map((blog) => {
            return (
              <Link to={"/blogs/" + blog.blogId}>
                <BlogCardLarge
                  title={blog.title}
                  description={blog.description}
                  createdDate={blog.createdDate}
                />
              </Link>
            );
          })}

          {<PagesSeeMoreCard onClick={toggle} label="See Less" />}
        </div>
      </Collapse>
    </>
  );
};
