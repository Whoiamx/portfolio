import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { StackTech } from "./components/StackTech";

import "./index.css";
function App() {
  return (
    <div className="bg-[#0f0f2d] text-white font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <StackTech />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
