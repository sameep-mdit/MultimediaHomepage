import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import BlogPage from "../../pages/Blogs";
import Mustwatch from "../../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },

  {
    path: "/blogs/:name",
    element: <Mustwatch />,
  },
]);
