import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {
  function setBody(target) {
    var div = document.getElementsByClassName("App_body");
    div.innerHTML = target;

  }

  return (

    <div className="App">
      <Header />

      <div className="App_body">
        <div className="Home">
          <img className="Main__Image" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png" alt="" />


        </div>


      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

