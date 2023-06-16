import React from "react";
import { Text, Title } from "@mantine/core";
import { getDayFrom } from "../../../../utils/date";
import { IBlogType } from "../blog";

export const imageURL =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

const BlogCardSmall: React.FC<Partial<IBlogType>> = ({
  title,
  createdDate,
  blogCoverPhoto,
  description,
}) => {
  console.log(blogCoverPhoto, createdDate);

  return (
    <article className="flex border border-solid mx-2  border-gray-200 rounded hover:border-blue-200">
      <div className="w-4/12 max-h-48 overflow-hidden min-h-48  h-full">
        <img
          className="w-full h-full object-cover image-hover"
          src={
            "https://clickfirstmarketing.com/wp-content/uploads/blog-for-business.jpg"
          }
        />
      </div>
      <div className="p-4 flex-1 w-8/12 text-xs">
        <Title lineClamp={2} className="text-lg">
          {title ?? ""}
        </Title>
        <p>{description}</p>
        <Text className="text-end text-xs mt-1 text-blue-600">
          {getDayFrom(new Date(createdDate!))}
        </Text>
      </div>
    </article>
  );
};

export default BlogCardSmall;
