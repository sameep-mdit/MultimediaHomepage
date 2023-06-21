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
    path: "/blogs/:id",
    element: <Blogpage />,
  },
  {
    path: "/videos/:id",
    element: <VideoPage />,
  },
  {
    path: "/blogdetailpage/:id",
    element: <BlogDetailPage />,
  },
]);
