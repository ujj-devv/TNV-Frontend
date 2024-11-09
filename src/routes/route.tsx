import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import AboutUs from "../components/pages/Home/AboutUs";
import Faq from "../components/pages/Home/Faq";
import About from "../components/pages/Home/About";
import Disclaimer from "../components/pages/Home/Disclaimer";
import TermsConditions from "../components/pages/Home/TermsConditions";
import PrivacyPolicy from "../components/pages/Home/PrivacyPolicy";
import CookiesPolicy from "../components/pages/Home/CookiesPolicy";
import RefundPolicy from "../components/pages/Home/RefundPolicy";
import ComingSoon from "../components/pages/Home/comingsoon";
import Cdf from "../components/pages/Home/Cdf";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <ComingSoon />,
  },
  {
    path: "/view/:id",
    element: <ViewDetailsPage />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/cookie-policy",
    element: <CookiesPolicy />,
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy />,
  },
  {
    path: "/cdf-downloads",
    element: <Cdf />,
  },
  {
    path: "/profile-management",
    element: <ComingSoon />,
  },
  {
    path: "/contact",
    element: <ComingSoon />,
  },
]);
