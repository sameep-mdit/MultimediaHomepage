// import React from "react";
// import { Blogs } from "../../api/blog";
// import { getBlogById } from "../../api/blog";
// import { useParams } from "react-router-dom";
// import { Avatar, Text } from "@mantine/core";
// import { baseUrl } from "../../constants/Strings";

// const BlogDetailPage = () => {
//   const [blogDetailPage, setBlogDetailPage] = React.useState<Blogs>();
//   const params = useParams();
//   const id: string = params.id!;

//   const asyncsideEffect = async (id: string) => {
//     const res = await getBlogById(id);
//     setBlogDetailPage(res.data);
//     console.log("object");
//   };

//   React.useEffect(() => {
//     console.log("Hello hljaljlj from blogpage");
//     asyncsideEffect(id);
//   }, []);

//   return (
//     <div className="p-6 ">
//       <Text className="text-center"> BlogDetailPage</Text>

//       {/* <p>{blogDetailPage?.blogCoverPhoto[0].coverphotoUrl}</p> */}

//       <img
//         src={
//           baseUrl +
//           "/uploads/" +
//           blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
//         }
//         alt=""
//       />
//       {blogDetailPage?.blogCoverPhoto[0].createdDate.split("T")[0]}
//       {blogDetailPage?.blogCoverPhoto[0].updatedDate.split("T")[0]}

//       <Avatar>
//         {blogDetailPage?.user.name.slice(0).charAt(0).toUpperCase()}
//       </Avatar>
//       {blogDetailPage?.user.name}
//       <h1>{blogDetailPage?.title}</h1>

//       <h1>{blogDetailPage?.description}</h1>
//     </div>
//   );
// };

// export default BlogDetailPage;

import React from "react";
import { user, Category, BlogCoverPhoto } from "../../api/blog";
import { getBlogById } from "../../api/blog";
import { useParams } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { baseUrl } from "../../constants/Strings";

interface BlogsDetailType {
  blogId: string;
  name: string;
  title: string;
  description: string;
  createdDate: Date;
  categories: Category[];
  user: user;
  updatedDate: string;
  blogCoverPhoto: BlogCoverPhoto[];
}

const BlogDetailPage = () => {
  const [blogDetailPage, setBlogDetailPage] = React.useState<BlogsDetailType>();
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
    <div className=" bg-[#FEF6FA]">
      <img
        className=" object-cover md:h-[600px] md:w-full"
        src={
          baseUrl +
          "/uploads/" +
          blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
        }
        alt=""
      />
      <div className="mx-8 mt-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Avatar className="rounded-full bg-slate-600">
              {blogDetailPage?.user.name.slice(0).charAt(0).toUpperCase()}{" "}
            </Avatar>
            <div>
              <p> {blogDetailPage?.user.name}</p>

              <p>
                Published on :{" "}
                {blogDetailPage?.blogCoverPhoto[0].createdDate.split("T")[0]}
              </p>
            </div>
          </div>
          <div>
            <p>
              {blogDetailPage?.categories.map((item: Category) => {
                return <p>#{item.name}</p>;
              })}
            </p>
            <p>
              Updated on :{" "}
              {blogDetailPage?.blogCoverPhoto[0].updatedDate.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="w-3/5 mx-auto bg-white p-4 mt-4">
          <h1 className="font-semibold">{blogDetailPage?.title}</h1>
          <p>{blogDetailPage?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
