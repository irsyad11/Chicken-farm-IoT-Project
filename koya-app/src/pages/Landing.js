import Hero from "../layouts/landing/Hero";
import What from "../layouts/landing/What";
import Measuring from "../layouts/landing/Measuring";
import Navbar from "../layouts/landing/Navhome";
import Footer from "../layouts/landing/Footer";
export default function Landing() {
  return (
    <>
      <Navbar />

      <Hero />
      <What />
      <Measuring />

      <Footer />
    </>
  );
}
