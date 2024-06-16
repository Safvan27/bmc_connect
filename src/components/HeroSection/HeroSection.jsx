import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({}) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        console.log("clicked");
        navigate("/user-management");
    };
    return (
        <section className="hero">
            <h1>
                Stay close to your a
                <span className="highlight"> favorite people</span>.
            </h1>
            <form className="phone-input-form">
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    id="phone-input"
                />
                <button
                    type="button"
                    id="get-started-btn"
                    onClick={() => handleButtonClick()}
                >
                    Get started
                </button>
            </form>
            <div className="hero-images">
                <img
                    src="chat-image.png"
                    alt="Chat Image"
                    className="chat-image"
                />
                <img
                    src="gift-image.png"
                    alt="Gift Image"
                    className="gift-image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
