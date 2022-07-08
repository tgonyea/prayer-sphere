import React from "react";





function Home() {

  return (

    <div className="home">
      <h1>Welcome to Prayer Sphere</h1>
      <img class="Main__Image" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/PrayerSphereLogoSmall.png" alt="PrayerSphere Logo" />



      <p class="fs-4">Welcome to Prayer Sphere. We are developing a new platform to bring all of our prayers together. We believe that the greatest way to bring His greatness into the world is through prayer. We are excited to launch this platform to bring your friends and family along to pray together on what is important to you. </p>
      <p class="fs-2">How can we pray for you?</p>

      <hr />  

      <figure class="text-center">
        <blockquote class="blockquote">
        <p>
          Then if my people who are called by my name will humble themselves and pray and seek my face and turn from their wicked ways, I will hear from heaven and will forgive their sins and restore their land.
        </p>
        </blockquote>
                <figcaption class="blockquote-footer">
    2 Chronicles 7:14 <cite title="Source Title">New Living Translation Bible</cite>
  </figcaption>
        

      </figure>

<div class="donate">
      <a class="custom-dbox-popup" href="https://donorbox.org/starting-out-13">
  <img src="https://donorbox.org/images/png-donate/button-medium-blue.png" alt="Donate Button"/>
</a>
    </div>
    </div>


  );
}

export default Home;