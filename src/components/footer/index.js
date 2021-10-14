import React from "react";
import Copyright from "./Copyright";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
    <footer id="contact">
        <div className="contact">
            <SocialIcons />
            <Copyright />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1b62d4" fill-opacity="0.9" d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,37.3C672,43,768,85,864,90.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </footer>
    )
};

export default Footer