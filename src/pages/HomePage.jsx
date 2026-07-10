import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Journey from "../components/Journey";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Journey />
      <Contact />
    </>
  );
};

export default HomePage;