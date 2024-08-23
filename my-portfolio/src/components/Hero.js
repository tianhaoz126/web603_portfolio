import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <motion.section 
            id="hero" 
            className="container-fluid text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
                padding: '6rem 0', 
                backgroundColor: '#2c3e50', 
                color: '#ecf0f1',
                backgroundImage: 'url("/images/hero-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 style={{ fontSize: '4rem', fontWeight: '700' }}>Tianhao Zhou</h1>
            <p style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Data Analyst | Turning Data into Actionable Insights</p>
            <motion.a 
                href="#projects" 
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.1 }}
            >
                View My Work
            </motion.a>
        </motion.section>
    );
}

export default Hero;
