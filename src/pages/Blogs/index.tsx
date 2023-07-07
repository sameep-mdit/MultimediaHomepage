import React from "react";

import { Blogs, blogType } from "../../api/blog";
import { axiosInstance } from "../../config/axiosInstance";

import MainWrapper from "../../Layout/MainWrapper";

import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";

import { useDisclosure } from "@mantine/hooks";
import { Button, Collapse, Title } from "@mantine/core";

import { Link } from "react-router-dom";
import { CapitalizeFirst } from "../../utils/string";
import PageWrapper from "../../Layout/PageWrapper";

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState<blogType[]>();

  const asyncSideEffect = async () => {
    try {
      const res = await axiosInstance.get("/get-all-blogs-category");
      setBlogs(res.data.data);
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
              index % 2 === 0 ? "" : "bg-gray-800 text-white"
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
        {item.length >= 4 && (
          <Button
            size="xs"
            color={index % 2 === 0 ? "" : "white"}
            variant="outline"
            onClick={toggle}
          >
            See More
          </Button>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {item.slice(0, 3).map((blog) => {
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
      </div>
      <Collapse in={opened}>
        <div className="grid md:grid-cols-3 gap-4">
          {item.slice(4, item.length).map((blog) => {
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
        </div>
      </Collapse>
    </>
  );
};
