import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import SearchPage from "./pages/SearchPage";
import About from "./components/pages/Home/About";
import AboutUs from "./components/pages/Home/AboutUs";
import Faq from "./components/pages/Home/Faq";
import ComingSoon from "./components/pages/Home/comingsoon";
import ViewDetailsPage from "./pages/ViewDetailsPage";
import Disclaimer from "./components/pages/Home/Disclaimer";
import TermsConditions from "./components/pages/Home/TermsConditions";
import PrivacyPolicy from "./components/pages/Home/PrivacyPolicy";
import CookiesPolicy from "./components/pages/Home/CookiesPolicy";
import RefundPolicy from "./components/pages/Home/RefundPolicy";
import Cdf from "./components/pages/Home/Cdf";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:authType" element={<Auth />} />
          <Route path="/search/:queryString" element={<SearchPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/view/:id" element={<ViewDetailsPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiesPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cdf-downloads" element={<Cdf />} />
          <Route path="/profile-management" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
