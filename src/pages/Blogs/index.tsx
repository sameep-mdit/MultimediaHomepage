import React from "react";
import { useParams } from "react-router-dom";
import { Blogs, blogType } from "../../api/blog";
import { axiosInstance } from "../../config/axiosInstance";
import { baseUrl } from "../../constants/Strings";
import MainWrapper from "../../Layout/MainWrapper";
import { HomeContext } from "../../store/Context/HomeContext";

const BlogPage = () => {
  const params = useParams();
  const id: string = params.id!;
  const [blogs, setBlogs] = React.useState<blogType>();

  // const NavBar = () => {
  //   const homepageData = React.useContext(HomeContext);
  //   console.log(homepageData.data, "navbar");
  //   React.useEffect(() => {
  //     console.log(homepageData.isLoading);
  //   }, [homepageData]);

  const asyncSideEffect = async (id: string) => {
    try {
      const res = await axiosInstance.get("/get-blogs/category/" + id);
      setBlogs(res.data.blogs);
      console.log({ ...res.data });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    console.log(id);
    asyncSideEffect(id);
  }, []);

  return (
    <MainWrapper>
      <>
        <div>{blogs?.name}</div>
        {blogs?.blogs.map((blog: Blogs) => {
          return (
            <div className="flex">
              <p>{blog.title}</p>
              <>
                {blog.blogCoverPhoto.map((cp) => {
                  return (
                    <img
                      key={cp.id}
                      src={baseUrl + "/uploads/" + cp.coverphotoUrl}
                      alt=""
                    />
                  );
                })} 
                <p>{blog.description}</p>
              </>
            </div>
          );
        })}
      </>
    </MainWrapper>
  );
};

export default BlogPage;
