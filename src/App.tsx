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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans scroll-smooth">
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
