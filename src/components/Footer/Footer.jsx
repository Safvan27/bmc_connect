import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Terms</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Support</h3>
                <ul>
                    <li>
                        <a href="#">Chat with us</a>
                    </li>
                    <li>
                        <a href="#">Help center</a>
                    </li>
                    <li>
                        <a href="#">Feature request</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Community</h3>
                <ul>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Discord</a>
                    </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>More</h3>
                <ul>
                    <li>
                        <a href="#">Buttons</a>
                    </li>
                    <li>
                        <a href="#">Brand assets</a>
                    </li>
                    <li>
                        <a href="#">Creator API</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
