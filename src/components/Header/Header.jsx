import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../../components/Button";

const Header = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <header className="navbar">
            <div className="logo">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
            <nav>
                <ul>
                    <li className="nav-item">
                        <a onClick={handleHomeClick}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a>Features</a>
                    </li>
                    <li className="nav-item">
                        <a>Explore creators</a>
                    </li>
                    <li className="nav-item">
                        <a>FAQ</a>
                    </li>
                </ul>
            </nav>
            <div className="auth-links">
                <Button type="transparent-no-border">Sign In</Button>
                <Button type="default">Sign Up</Button>
            </div>
        </header>
    );
};

export default Header;
