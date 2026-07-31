import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </main>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default App;
