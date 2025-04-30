import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Pipeline from './components/Pipeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Hero />
        <Skills />
        <Pipeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;