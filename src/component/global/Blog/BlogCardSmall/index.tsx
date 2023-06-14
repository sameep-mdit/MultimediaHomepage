import React from "react";
import { Badge, Title, Text } from "@mantine/core";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { blogType, getBlogs } from "../../../../api/blog";
import { baseUrl } from "../../../../constants";
import { getDayFrom } from "../../../../utils/date";

export const imageURL =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

const BlogCardSmall = ({ props }: { props: Partial<blogType> }) => {
  const navigate = useNavigate();
  const [blogList, setblogList] = React.useState<blogType[]>();

  const asynSideEffect = async () => {
    try {
      const data = await getBlogs();
      setblogList(data.data);
      console.log(data);
    } catch (e) {
      toast("Unable to get channel data");
    }
  };

  React.useEffect(() => {
    if (!blogList) asynSideEffect();
  }, []);

  return (
    <article className="flex border border-solid border-gray-200 rounded hover:border-blue-200">
      <div className="w-4/12 max-h-48 overflow-hidden min-h-48  h-full">
        <img
          className="w-full h-full object-cover image-hover"
          src={
            props.blogCoverPhoto
              ? `${baseUrl}/uploads/${props.blogCoverPhoto[0].coverphotoUrl}`
              : imageURL
          }
        />
      </div>
      <div className="p-4 flex-1 w-8/12 text-xs">
        <Title lineClamp={2} className="text-lg">
          <Title>{props.title ?? ""}</Title>
        </Title>
        {props.categories?.map((item) => {
          return <Badge>{item.name}</Badge>;
        })}
        <Text lineClamp={3}>description</Text>
        <div className="flex justify-end mt-4">
          <Text>{getDayFrom(props.createdDate!)}</Text>
        </div>
      </div>
    </article>
  );
};

export default BlogCardSmall;
