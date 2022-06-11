import react from "react";
import App from "../App";
import './App.css';
import Privacy from "./Privacy";
import swapContent from "../utilities";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <button onClick={swapContent('<Privacy />')} >Privacy Policy</button>



            </div>

            <div className="footer_center">
                <p>Contact us: <a href="mailto:support@prayersphere.com">support@prayersphere.com</a>

                </p>
                &copy; 2021 Prayer Sphere. All rights reserved.
            </div>

        </div>
    )
}



export default Footer;