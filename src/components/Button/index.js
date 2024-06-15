import React from "react";
import "./Button.css";

const Button = ({ onClick, children, type }) => {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
