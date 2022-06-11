import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {

  return (

    <div className="App">
      <Header />

      <div className="App__body">
        <div className="Home">
          <img className="Main__Image" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png" alt="" />
          <p>Welcome to Prayer Sphere. We are developing a new platform to bring all of our prayers together. We believe that
            the greatest way to bring His greatness into the world is through prayer. We are excited to launch this platform
            to bring your friends and family along to pray together on what is important to you. How can we pray for you?

            <h1>
              TESTING UPDATE TO NPM
            </h1>

          </p>

          <div className='Donate'>
            <a class="custom-dbox-popup" href="https://donorbox.org/starting-out-13">
              <img src="https://donorbox.org/images/png-donate/button-medium-blue.png" />
            </a>
          </div>


        </div>



      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;


