import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './components/App.css';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import About from './components/Aboout';
import Home from './components/Home';
import Error from './components/Error';

function App() {

  return (

    <div className="App">


      <Router>
        <nav>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>



        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Error />} />



        </Routes>
      </Router>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;


