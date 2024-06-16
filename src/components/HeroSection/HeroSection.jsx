import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import "./HeroSection.css";

const HeroSection = ({}) => {
    return (
        <section className="hero">
            <h1>
                Stay close to your a<br />
                <span className="highlight"> favorite people</span>.
            </h1>
            <OutlinedInput
                id="outlined-adornment-weight"
                placeholder="Enter your phone number"
                size="medium"
                endAdornment={
                    <button className="start-button">Get started</button>
                }
                sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "25px",
                    },
                }}
            />
            <div className="hero-images">
                <div className="gradient bottom-left"></div>
                <div className="gradient bottom-right"></div>
                <div className="gradient bottom-center"></div>
                <img
                    src="/homepage1/chat.svg"
                    alt="Chat Image"
                    className="chat-image"
                />
                <img
                    src="/homepage1/main_mobile.svg"
                    alt="Gift Image"
                    className="gift-image"
                />
                <img
                    src="/homepage1/avatar.svg"
                    alt="Gift Image"
                    className="avatar-image"
                />
                <img
                    src="/homepage1/avatar_chat.svg"
                    alt="Gift Image"
                    className="avatar_chat-image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
