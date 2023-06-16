
import React from "react";
import { Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { getDayFrom } from "../../../../utils/date";
import { IBlogType } from "../blog";


const BlogCardLarge: React.FC<Partial<IBlogType>> = ({
  blogId,
  title,
  description,
  createdDate,
  blogCoverPhoto,
}) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/blogdetailpage/${blogId}`);
  }

  return (
    <article
      key={blogId}
      onClick={handleClick}
      className="text-black bg-white mb-2  md:max-w-[90vw] sm:max-w-none h-full  border border-solid border-gray-100 rounded-lg hover:border-blue-200"
    >
      <div className="w-full h-60  rounded-t-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover image-hover "
          // src={imageUrl ? `${baseUrl}/uploads/${imageUrl}` : imageURL}
          // src={blogCoverPhoto ? blogCoverPhoto[0].coverphotoUrl : imageURL}
          src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_640.jpg"
          alt={"blog-image"}
        />
      </div>
      <div className="p-4 ">
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
