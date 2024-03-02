import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home-page/hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
