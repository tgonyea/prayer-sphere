import react from "react";
import App from "./App";
import './App.css';
import Privacy from "./Privacy";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <element onclick="App.setBody('<Privacy />')" >Privacy Policy</element>



            </div>
            <div className="footer_center">
                &copy; 2021 Prayer Sphere. All rights reserved.
            </div>

        </div>
    )
}



export default Footer;