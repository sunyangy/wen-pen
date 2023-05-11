import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Pens from './pages/Pens';
import Home from './pages/Home';
import './App.css';
import PenDetail from './pages/PenDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import DashBoard from './pages/Host/DashBoard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <main>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/pens" element={<Pens />}></Route>
                <Route path="/pens/:id" element={<PenDetail />}></Route>
                <Route element={<HostLayout/>}>
                  <Route path='/host' element={<DashBoard/>}></Route>
                  <Route path='/host/income' element={<Income/>}></Route>
                  <Route path='/host/reviews' element={<Reviews/>}></Route>
                </Route>
              </Route>
              
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
