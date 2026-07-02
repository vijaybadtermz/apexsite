import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const EstimatorPage = lazy(() => import('./pages/EstimatorPage'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-shell">
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>

          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/estimator" element={<EstimatorPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
