import CTA from "./(sections)/CTA/CTA";
import Features from "./(sections)/Features/Features";
import Features2 from "./(sections)/Features2/Features2";
import Footer from "./(sections)/Footer/Footer";
import Hero from "./(sections)/Hero/Hero";
import Navbar from "./(sections)/Navbar/Navbar";
import Statistics from "./(sections)/Statistics/Statistics";
import Testimonials from "./(sections)/Testomonials/StatsShowcaseSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Features2 />
      <Statistics />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
}
