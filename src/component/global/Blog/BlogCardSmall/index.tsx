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
    <article className="border w-full  h-full grid grid-cols-3 min-h-32 border-solid mx-2 bg-white text-black border-gray-200 rounded-lg hover:border-blue-200">
      <div className="w-full  h-full  overflow-hidden rounded-l-lg">
        <img
          className="w-full h-full object-cover image-hover"
          src={
            "https://clickfirstmarketing.com/wp-content/uploads/blog-for-business.jpg"
          }
        />
      </div>
      <div className="p-4 col-span-2 text-xs">
        <Text className="text-xs text-zinc-600">
          {getDayFrom(new Date(createdDate!))}
        </Text>
        <Title lineClamp={1} className="text-lg leading-none">
          {title ?? ""}
        </Title>
        <Text lineClamp={3} className="mt-2">
          {description}
        </Text>
      </div>
    </article>
  );
};

export default BlogCardSmall;
