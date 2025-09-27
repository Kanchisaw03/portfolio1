import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import ResourceHints from './components/ResourceHints.jsx'
import PerformanceMonitor from './components/PerformanceMonitor.jsx'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
)

// Register service worker for caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResourceHints />
    <PerformanceMonitor />
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>,
)