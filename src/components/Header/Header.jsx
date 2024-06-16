import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./Header.css";
const Header = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <header className="navbar">
            <div className="logo" onClick={handleHomeClick}>
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
                <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Search Creators"
                    size="small"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="start"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    sx={{
                        borderRadius: "25px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "25px",
                        },
                    }}
                    aria-describedby="outlined-weight-helper-text"
                />
                <Button type="transparent-no-border">Sign In</Button>
                <Button type="default">Sign Up</Button>
            </div>
        </header>
    );
};

export default Header;
