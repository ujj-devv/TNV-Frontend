import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:queryString",
    element: <SearchPage />
  },
  {
    path: "/view/:id",
    element: <ViewDetailsPage />
  },
]);