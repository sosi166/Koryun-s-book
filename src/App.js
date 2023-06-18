import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import BookAbout from './Components/BookAbout';
import AuthorAbout from './Components/AuthorAbout';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  return (
      <div className="App">
          <Navbar />
          <Header />
          <BookAbout />
          <AuthorAbout />
          <Contact />
          <Footer />
          <motion.div 
              className="progress-bar" 
              style={{ scaleX }} />
    </div>
  );
}

export default App;
