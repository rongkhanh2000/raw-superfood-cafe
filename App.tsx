import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-earth-100 selection:text-earth-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Ingredients />
      </main>
      <Footer />
    </div>
  );
}

export default App;