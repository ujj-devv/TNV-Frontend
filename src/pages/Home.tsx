import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import AboutUs from "../components/pages/Home/AboutUs";
import AvailableCertifications from "../components/pages/Home/AvailableCertifications";
import FAQSection from "../components/pages/Home/FAQSection";
import HeroSection from "../components/pages/Home/HeroSection";
import LEIApplicationGuide from "../components/pages/Home/LEIApplicationGuide";
import LEIBenefitsOverview from "../components/pages/Home/LEIBenefitsOverview ";
import PricingSection from "../components/pages/Home/PricingSection";
import ServiceOverview from "../components/pages/Home/ServiceOverview";
import ImportantLinksSection from "../components/pages/Home/ImportantLinksSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServiceOverview />
      <LEIBenefitsOverview />
      <LEIApplicationGuide />
      <AboutUs />
      <AvailableCertifications />
      <PricingSection />
      <FAQSection />
      <ImportantLinksSection />
      <Footer />
    </>
  );
};

export default Home;
