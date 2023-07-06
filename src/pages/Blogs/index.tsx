import React from "react";

import { blogType } from "../../api/blog";
import { axiosInstance } from "../../config/axiosInstance";

import MainWrapper from "../../Layout/MainWrapper";

import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";

import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Collapse, Title } from "@mantine/core";

import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState<blogType[]>();
  const [opened, { toggle }] = useDisclosure(false);

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
      {blogs?.map((item) => {
        return (
          <Box mx="auto" className="px-[10vw]">
            <Title order={3}>{item.name}</Title>
            <div className="flex justify-end mb-4">
              <Button onClick={toggle}>See More</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {item.blogs.slice(0, 3).map((blog) => {
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
                {item.blogs.slice(4, item.blogs.length).map((blog) => {
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
          </Box>
        );
      })}
    </MainWrapper>
  );
};

export default BlogPage;
