import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:authType(login|register)", // Match only 'login' or 'register' for authType
    element: <Auth />,
  },
  {
    path: "/search/:queryString",
    element: <SearchPage />
  },
  {
    path: "/view/:id",
    element: <ViewDetailsPage />
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);