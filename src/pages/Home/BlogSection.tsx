import PageWrapper from "../../Layout/PageWrapper";

const BlogSection = () => {
  return (
    <PageWrapper>
      {/* <div className="  bg-white text-black">
        <h1 className="text-center font">BlogSection</h1>
        {dummyHomePageData.homepage.blogs.map((item, index) => {
          return (
            <div key={item.id}>
              <h2 className="text-2xl font-bold  hover:cursor-pointer">
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
                    <div>
                      <Link to={"/blogs/" + blog.blogId}>
                        <BlogCardLarge
                          createdDate={blog.createdDate}
                          title={blog.title}
                          description={blog.description}
                          blogCoverPhoto={blog.blogCoverPhoto}
                        />
                      </Link>
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
      </div> */}
    </PageWrapper>
  );
};

export default BlogSection;
