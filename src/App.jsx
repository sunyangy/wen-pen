import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Pens from './pages/Pens';
import Home from './pages/Home';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header-container">
          <header>
            <Link to="/" className="site-logo">
              Pen Spinning
            </Link>
            <nav className="nav-header">
              <Link to="/about">about</Link>
              <Link to="/pens">pens</Link>
            </nav>
          </header>
        </div>
        <div className="main-container">
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/pens" element={<Pens />}></Route>
            </Routes>
          </main>
        </div>
        <footer>
          <p>@2023 sunyang</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
