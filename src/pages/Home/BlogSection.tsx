import { dummyHomePageData } from "../../constants/dummy/dummyData";
import BlogCardLarge from "../../component/global/Blog/BlogCardLarge";
import BlogCardSmall from "../../component/global/Blog/BlogCardSmall";

const BlogSection = () => {
  return (
    <div className=" md:px-[20vh] bg-black text-white">
      <h1>BlogSection</h1>
      {dummyHomePageData.homepage.blogs.map((item, index) => {
        return (
          <div key={item.id}>
            <h2 className="text-2xl font-bold mb-2 hover:cursor-pointer">
              {item.name}
            </h2>
            {item.blogs.map((blog) => {
              return (
                <div
                  className={
                    index % 2 == 1
                      ? "flex flex-col md:flex-row-reverse items-center md:items-start"
                      : "flex  flex-col md:flex-row items-center md:items-start"
                  }
                  key={blog.blogId}
                >
                  <div className="flex-1">
                    <BlogCardLarge
                      blogId={blog.blogId}
                      title={blog.title}
                      description={blog.description}
                      blogCoverPhoto={blog.blogCoverPhoto}
                      createdDate={blog.createdDate}
                    />
                  </div>
                  <div className="flex-1">
                    <BlogCardSmall
                      blogId={blog.blogId}
                      title={blog.title}
                      createdDate={blog.createdDate}
                      blogCoverPhoto={blog.blogCoverPhoto}
                      description={blog.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BlogSection;
