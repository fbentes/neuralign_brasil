import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Plans from './pages/Plans';
import Demo from './pages/Demo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Header />
        <main className="flex-grow" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/depoimentos" element={<Testimonials />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/lead-collection" element={<Demo />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;