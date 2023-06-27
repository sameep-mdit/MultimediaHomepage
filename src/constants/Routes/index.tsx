import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Blogpage from "../../pages/Blogs";
import VideoPage from "../../pages/Video";
import BlogDetailPage from "../../pages/Blogs/BlogDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogpage />,
  },
  {
    path: "/videos",
    element: <VideoPage />,
  },
  {
    path: "/blogdetailpage",
    element: <BlogDetailPage />,
  },
]);
