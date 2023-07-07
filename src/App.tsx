import { RouterProvider } from "react-router-dom";
import "./index.scss";
import { router } from "./constants/Routes";
import { GlobalProvider } from "./store/Context/HomeContext";

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
