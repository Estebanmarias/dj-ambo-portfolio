import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deepPurple overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}