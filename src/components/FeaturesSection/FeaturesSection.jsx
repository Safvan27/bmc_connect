import React from "react";
import "./FeaturesSection.css";
import EastIcon from "@mui/icons-material/East";
const FeaturesSection = () => {
    return (
        <>
            <section className="section">
                <div className="text-content">
                    <div className="feature-header">Express yourself</div>
                    <div className="feature-header">freely</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <div className="link-text">
                            Learn more
                            <EastIcon fontSize="small" />
                        </div>
                    </p>
                </div>
                <div className="image-content">
                    <img src="/homepage2/women.svg" alt="women" />
                </div>
            </section>
            <section className="section">
                <div className="image-content">
                    <img src="/homepage2/mobile.svg" alt="mobile" />
                </div>
                <div className="text-content">
                    <div className="feature-header">Create and</div>
                    <div className="feature-header">Share</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <div className="link-text">
                            Learn more
                            <EastIcon fontSize="small" />
                        </div>
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="text-content">
                    <div className="feature-header">Share live</div>
                    <div className="feature-header">location</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <div className="link-text">
                            Learn more
                            <EastIcon fontSize="small" />
                        </div>
                    </p>
                </div>
                <div className="image-content">
                    <img src="/homepage2/man.svg" alt="women" />
                </div>
            </section>
        </>
    );
};

export default FeaturesSection;
