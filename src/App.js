
// export default App;
import "./index.css";
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import Skills from './components/Skills/Skills';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;