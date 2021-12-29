import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://prayer-sphere-resources.s3.us-east-2.amazonaws.com/images/logo2.png" className="logo" alt="logo" />
            </div>

            <div className="header__center">
                Home

            </div>

            <div className="header__right">
                Login
            </div>
        </div>
    )
}

export default Header;