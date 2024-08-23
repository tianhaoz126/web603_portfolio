import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <Header />
            <Hero />
            <About data-aos="fade-up" />
            <Projects data-aos="fade-up" />
            <Resume data-aos="fade-up" />
            <Contact data-aos="fade-up" />
            <Footer />
        </div>
    );
}

export default App;
