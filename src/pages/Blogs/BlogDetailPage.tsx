import React from "react";
import { Blogs } from "../../api/blog";
import { getBlogById } from "../../api/blog";
import { useParams } from "react-router-dom";
import { Avatar, Text } from "@mantine/core";
import { baseUrl } from "../../constants/Strings";

const BlogDetailPage = () => {
  const [blogDetailPage, setBlogDetailPage] = React.useState<Blogs>();
  const params = useParams();
  const id: string = params.id!;

  const asyncsideEffect = async (id: string) => {
    const res = await getBlogById(id);
    setBlogDetailPage(res.data);
    console.log("object");
  };

  React.useEffect(() => {
    console.log("Hello hljaljlj from blogpage");
    asyncsideEffect(id);
  }, []);

  return (
    <div>
      <Text> BlogDetailPage</Text>

      {/* <p>{blogDetailPage?.blogCoverPhoto[0].coverphotoUrl}</p> */}
      <img
        src={
          baseUrl +
          "/uploads/" +
          blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
        }
        alt=""
      />
      {blogDetailPage?.blogCoverPhoto[0].createdDate.split("T")[0]}
      {blogDetailPage?.blogCoverPhoto[0].updatedDate.split("T")[0]}

      <h1>{blogDetailPage?.title}</h1>
      <Avatar>
        {blogDetailPage?.user.name.slice(0).charAt(0).toUpperCase()}{" "}
      </Avatar>
      {blogDetailPage?.user.name}
      <h1>{blogDetailPage?.description}</h1>
    </div>
  );
};

export default BlogDetailPage;
