import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  function changeImage(e) {
    e.target.src = "https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png"
  }
  function changeImageBack(e) {
    e.target.src = "https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo1.png"
  }

  return (

    <div className="App">
      <Header />

      <div className="App_body">
        <div className="MainImage">
          <img className="Main__Image" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo1.png" alt="" onMouseOver={changeImage} onMouseOut={changeImageBack} />


        </div>

        <p>This is the app body</p>

      </div>
    </div>
  );
}

export default App;

