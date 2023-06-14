import React from "react";
import { Badge, Title, Text, Button, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { getDayFrom } from "../../../../utils/date";
import { imageURL } from "../BlogCardSmall";
import { baseUrl } from "../../../../constants";

type Category = {
  name: string;
};

type BlogCardProp = {
  blogId: string;
  title: string;
  imageUrl: string;
  description: string;
  createdDate: Date;
  categories: Category[];
  category?: string;
};

const BlogCardLarge = (prop: Partial<BlogCardProp>) => {
  console.log(prop, "this is props");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/blogdetailpage");
  }
  const { blogId, title, imageUrl, description, createdDate, category } = prop;
  imageUrl?.length
    ? console.log(imageUrl)
    : console.log("hello from cover photo");
  return (
    <article
      key={blogId}
      onClick={handleClick}
      className="text-black bg-white  max-w-[90vw] sm:max-w-none h-full  border border-solid border-gray-100 rounded-lg hover:border-blue-200"
    >
      <div className="w-full h-60  rounded-t-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover image-hover "
          src={imageUrl ? `${baseUrl}/uploads/${imageUrl}` : imageURL}
          alt={"blog-image"}
        />
      </div>
      <div className="p-4 ">
        {prop.categories && (
          <div className="flex gap-2">
            {prop.categories?.map((item, index) => (
              <Badge className="" size="xs" key={index}>
                {item.name}
              </Badge>
            ))}
          </div>
        )}
        {category && (
          <div className="flex gap-2">
            <Badge className="" size="xs">
              {category}
            </Badge>
          </div>
        )}
        <Title
          className="text-xl no-underline  md:hover:text-blue-700"
          lineClamp={1}
        >
          {title}
        </Title>
        <Text lineClamp={3} className="text-xs h-12 text-gray-500 break-words">
          {description}
        </Text>
        <Text className="text-end text-xs mt-1 text-blue-600">
          {getDayFrom(new Date(createdDate!))}
        </Text>
      </div>
    </article>
  );
};

export default BlogCardLarge;
