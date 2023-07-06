import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Blogpage from "../../pages/Blogs";
// import VideoPage from "../../pages/Video";
import BlogDetailPage from "../../pages/Blogs/BlogDetailPage";
import RegisterPage from "../../pages/Register";
import LoginPage from "../../pages/Login";
import VideoPage from "../../pages/Video";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs/",
    element: <Blogpage />,
  },
  {
    path: "/videos/",
    element: <VideoPage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
