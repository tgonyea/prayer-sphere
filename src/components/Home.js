import React from "react";



function Home() {

  return (

    <div className="Home">
      <h1>Welcome to PrayerSphere</h1>
      <img class="Main__Image" src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png" alt="PrayerSphere Logo" />

      <p class="fs-4">Welcome to Prayer Sphere. We are developing a new platform to bring all of our prayers together. We believe that the greatest way to bring His greatness into the world is through prayer. We are excited to launch this platform to bring your friends and family along to pray together on what is important to you. How can we pray for you?</p>

      <br />

      <div classname="BibleVerse">
        <p class="fs-2 fst-italic">
          Then if my people who are called by my name will humble themselves and pray and seek my face and turn from their wicked ways, I will hear from heaven and will forgive their sins and restore their land.
        </p>
        <p class="fs-3">(2 Chronicles 7:14 NLT)</p>

      </div>
    </div >


  );
}

export default Home;