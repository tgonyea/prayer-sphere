import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './components/App.css';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import About from './components/Aboout';
import Home from './components/Home';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (

    <div className="App">


      <Router>
        <nav class="navbar navbar-expand-md bg-light sticky-top">
          <div class="container-fluid">

            <a class="navbar-brand" href="/">
              <img class="logo d-inline-block align-text-top" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png" alt='PrayerSphere Logo'></img>
              Prayer Sphere
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls='navbarToggler' aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-3" id="navbarToggler">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                <Link to="/" class="nav-link" > Home</Link>
                <Link to="/about" class="nav-link" > About</Link>
                <Link to="/privacy" class="nav-link" > Privacy</Link>

              </ul>
            </div>
          </div>

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


