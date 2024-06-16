import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-logo-section">
                    <div className="logo">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Privacy</a>
                        </li>
                        <li>
                            <a>Privacy & Terms</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li>
                            <a>Chat with us</a>
                        </li>
                        <li>
                            <a>Help center</a>
                        </li>
                        <li>
                            <a>Feature request</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Community</h3>
                    <ul>
                        <li>
                            <a>Twitter</a>
                        </li>
                        <li>
                            <a>Facebook</a>
                        </li>
                        <li>
                            <a>Discord</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>More</h3>
                    <ul>
                        <li>
                            <a>Buttons</a>
                        </li>
                        <li>
                            <a>Brand assets</a>
                        </li>
                        <li>
                            <a>Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-apps">
                <a>
                    <img src="/app_store.png" alt="Google Play" />
                </a>
                <a>
                    <img src="/google_play.png" alt="Google Play" />
                </a>
            </div>
            <div className="footer-bottom">
                <p>© 2023. Privacy & Terms.</p>
            </div>
        </footer>
    );
};

export default Footer;
