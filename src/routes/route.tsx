import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound";
import AboutUs from "../components/pages/Home/AboutUs";
import LOUDataAnalytics from "../components/pages/Home/LOUDataAnalytics";
import Faq from "../components/pages/Home/Faq";
import About from "../components/pages/Home/About";

export const router = createBrowserRouter([
  {
    path: "*", 
    element: <NotFound />, 
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:authType",
    element: <Auth />,
  },
  {
    path: "/search/:queryString",
    element: <SearchPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/coming-soon",
    element: <LOUDataAnalytics />,
  },
  {
    path: "/view/:id",
    element: <ViewDetailsPage />,
  },
]);
