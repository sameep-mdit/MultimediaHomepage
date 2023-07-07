import React from "react";
import { Title, Text } from "@mantine/core";

import { getDayFrom } from "../../../../utils/date";
import { IBlogType } from "../blog";

const BlogCardLarge: React.FC<Partial<IBlogType>> = ({
  blogId,
  title,
  description,
  createdDate,
}) => {
  return (
    <article
      key={blogId}
      className="text-black h-full mb-5 bg-white sm:max-w-none border border-solid border-gray-100 rounded-lg hover:border-blue-200"
    >
      <div className="w-full h-[100% - 20px] rounded-t-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          // src={imageUrl ? `${baseUrl}/uploads/${imageUrl}` : imageURL}
          // src={blogCoverPhoto ? blogCoverPhoto[0].coverphotoUrl : imageURL}
          src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_640.jpg"
          alt={"blog-image"}
        />
      </div>
      <div className="p-4 text-xs">
        <Text className="text-xs text-zinc-600">
          {getDayFrom(new Date(createdDate!))}
        </Text>
        <Title lineClamp={1} className="text-lg leading-none">
          {title ?? ""}
        </Title>
        <Text lineClamp={2} className="mt-2">
          {description}
        </Text>
      </div>
    </article>
  );
};

export default BlogCardLarge;
