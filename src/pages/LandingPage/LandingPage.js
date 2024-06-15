import Container from "@mui/material/Container";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/user-management");
    };

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <button onClick={handleButtonClick}>
                    Go to User Management
                </button>
            </Container>
        </React.Fragment>
    );
}
