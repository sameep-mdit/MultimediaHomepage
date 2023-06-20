import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Blogpage from "../../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs/:id",
    element: <Blogpage />,
  },
]);
