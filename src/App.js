import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './components/App.css';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (

    <div class="App container-fluid">


      <Router>
        <div class="row">
          <div class="col">
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
          </div>
        </div>
        <div class="row justify-content-md-center">
          
          <div class="col-sm-12 col-lg-10 mainSection">


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<Error />} />

            </Routes>
          </div>

         
        </div>






      </Router>



      <div>
        <Footer />
      </div>
    </div >
  );
}

export default App;


