import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import React from 'react'

// Lazy load all components
const Home = lazy(() => import("./views/Home.jsx"));
const Services = lazy(() => import("./views/Service.jsx"));
const Portfolio = lazy(() => import("./views/Portfolio.jsx"));
const Contactus = lazy(() => import("./views/Contactus.jsx"));
const Platforms = lazy(() => import("./views/platforms.jsx"));
const ForCreators = lazy(() => import("./views/Creators.jsx"));
const Blog = lazy(() => import("./views/Blog.jsx"));
const Testomonials = lazy(() => import("./views/Testonimals.jsx"));
const Industries = lazy(() => import("./views/industries.jsx"));
const CaseStudy = lazy(() => import("./views/CaseStudy.jsx"));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #333',
        borderTop: '5px solid rgba(0, 237, 231, 1)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}></div>
      <p>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolis" element={<Portfolio />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/ForCreators" element={<ForCreators />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Testomonials" element={<Testomonials />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/cases" element={<CaseStudy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
