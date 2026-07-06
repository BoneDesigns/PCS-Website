import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Positioning from "./components/Positioning.jsx";
import Marquee from "./components/Marquee.jsx";
import Products from "./components/Products.jsx";
import CustomBlending from "./components/CustomBlending.jsx";
import WhyPCS from "./components/WhyPCS.jsx";
import Markets from "./components/Markets.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <Marquee />
        <Products />
        <CustomBlending />
        <WhyPCS />
        <Markets />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
