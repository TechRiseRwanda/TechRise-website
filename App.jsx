import Header from "./assets/header/Header";
import Background from "./assets/Background/Background";
import Footer from "./assets/Footer/Footer";
import Component from "./assets/Component1/Component";
import AboutSection from "./assets/AboutSection/AboutSection";
import Services from "./assets/Service/Services";
import WhyChooseUs from "./assets/WhyChooseUs/WhyChooseUs";
import CaseStudies from "./assets/CaseStudies/CaseStudies";
import TeamSection from "./assets/TeamSection/TeamSection";
import TestimonialSection from "./assets/TestimonialSection/TestimonialSection";
import NewsletterSection from "./assets/NewsletterSection/NewsletterSection";
import PartnershipsSection from "./assets/PartnershipsSection/PartnershipsSection";
import ScrollToTopButton from "./assets/ScrollToTopButton/ScrollToTopButton";
import WhatsAppWidget from "./assets/WhatsAppWidget/WhatsAppWidget";
import FAQ from "./assets/FAQ/Faq";
function App() {

  return (
    <>
    <Header/>
    <Background/>
    <AboutSection />
    <Component />
    <Services/>
    <WhyChooseUs />
    <CaseStudies />
    <TeamSection/>
    <TestimonialSection />
    <PartnershipsSection />
    <FAQ/>
    <NewsletterSection />
    <WhatsAppWidget/>
    <ScrollToTopButton/>
    <Footer/>
    </>
  )
}
export default App
