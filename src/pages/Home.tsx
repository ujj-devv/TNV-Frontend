import Footer from "../components/global/Footer"
import NavBar from "../components/global/NavBar"
import AboutUs from "../components/pages/Home/AboutUs"
import AvailableCertifications from "../components/pages/Home/AvailableCertifications"
import ContactUs from "../components/pages/Home/ContactUs"
import FAQSection from "../components/pages/Home/FAQSection"
import HeroSection from "../components/pages/Home/HeroSection"
import LEIApplicationGuide from "../components/pages/Home/LEIApplicationGuide"
import LEIBenefitsOverview from "../components/pages/Home/LEIBenefitsOverview "
import PricingSection from "../components/pages/Home/PricingSection"
import ServiceOverview from "../components/pages/Home/ServiceOverview"

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <LEIBenefitsOverview/>
            <LEIApplicationGuide/>
            <ServiceOverview/>
            <AboutUs/>
            <AvailableCertifications/>
            <PricingSection/>
            <FAQSection/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home
