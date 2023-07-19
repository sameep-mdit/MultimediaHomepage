import React from "react";
import { Title, Text } from "@mantine/core";

import { IBlogType } from "../blog";
import { getDayFrom } from "../../../../utils/date";
import { CapitalizeFirst } from "../../../../utils/string";

import style from "../index.module.scss";

const BlogCardLarge: React.FC<Partial<IBlogType>> = ({
  blogId,
  title,
  description,
  createdDate,
}) => {
  return (
    <article key={blogId} className={style.blogCardLarge}>
      <div className="w-full h-[100% - 20px] overflow-hidden ">
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
        <Title lineClamp={1} className="text-lg">
          {CapitalizeFirst(title ?? "")}
        </Title>
        <Text lineClamp={2} className="text-zinc-600">
          {description}
        </Text>
      </div>
    </article>
  );
};

export default BlogCardLarge;
