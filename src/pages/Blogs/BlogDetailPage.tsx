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
import { Avatar, Text } from "@mantine/core";
import { baseUrl } from "../../constants/Strings";
import MainWrapper from "../../Layout/MainWrapper";
import PageWrapper from "../../Layout/PageWrapper";
import { getDayFrom } from "../../utils/date";

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
    <MainWrapper>
      <PageWrapper>
        <div>
          <img
            className=" object-cover md:h-[400px] md:w-full"
            src={
              baseUrl +
              "/uploads/" +
              blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
            }
            alt=""
          />
          <article className="p-4 grid gap-4">
            <h1 className="font-semibold">{blogDetailPage?.title}</h1>

            <Text>{blogDetailPage?.description}</Text>

            <section className="grid gap-2 mt-4">
              {/* <Text className="text-md font-regular">Submitted By</Text> */}
              <div className="flex gap-2">
                <Avatar radius="sm" size="md" color="blue">
                  {blogDetailPage?.user.name.slice(0).charAt(0).toUpperCase()}
                </Avatar>
                <div className="text-xs">
                  <Text className="text-sm font-semibold">
                    {blogDetailPage?.user.name}
                  </Text>

                  <Text>
                    {blogDetailPage?.blogCoverPhoto[0]?.createdDate &&
                      getDayFrom(
                        blogDetailPage.blogCoverPhoto[0]
                          .createdDate as any as Date
                      )}
                  </Text>
                </div>
              </div>
            </section>
          </article>
        </div>
      </PageWrapper>
    </MainWrapper>
  );
};

export default BlogDetailPage;
