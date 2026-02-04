import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import NotFound from './NotFound';

function App() {
  return (
      <Router>
        <nav style={{ padding: '10px', background: '#f4f4f4' }}>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            {/* Add these to test the dynamic routing */}
            <Link to="/product/1">Product 1</Link> |
            <Link to="/product/apple-watch">Product 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Dynamic Route for Product IDs */}
          <Route path="/product/:id" element={<Product />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;