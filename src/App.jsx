import React from 'react';
import Home from './pages/Home';
import ThemeProvider from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <div className="theme-toggle-wrapper">
          <ThemeToggle />
        </div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
