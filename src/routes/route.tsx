import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Layout } from "../Layout";
import SearchPage from "../pages/SearchPage";
import AboutUs from "../components/pages/Home/AboutUs";
import About from "../components/pages/Home/About";
import Faq from "../components/pages/Home/Faq";
import ComingSoon from "../components/pages/Home/comingsoon";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import Disclaimer from "../components/pages/Home/Disclaimer";
import TermsConditions from "../components/pages/Home/TermsConditions";
import PrivacyPolicy from "../components/pages/Home/PrivacyPolicy";
import CookiesPolicy from "../components/pages/Home/CookiesPolicy";
import RefundPolicy from "../components/pages/Home/RefundPolicy";
import Cdf from "../components/pages/Home/Cdf";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth/Auth";
import ForgotPassword from "../pages/ForgotPassword";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:queryString", element: <SearchPage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <Faq /> },
      { path: "/coming-soon", element: <ComingSoon /> },
      { path: "/view/:id", element: <ViewDetailsPage /> },
      { path: "/disclaimer", element: <Disclaimer /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/cookie-policy", element: <CookiesPolicy /> },
      { path: "/refund-policy", element: <RefundPolicy /> },
      { path: "/cdf-downloads", element: <Cdf /> },
      { path: "/profile-management", element: <ComingSoon /> },
      { path: "/contact", element: <ComingSoon /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/:authType",
    element: <Auth />, 
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />, 
  },
]);