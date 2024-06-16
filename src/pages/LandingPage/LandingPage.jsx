import React from "react";
import CreatorsSection from "../../components/CreatorsSection/CreatorsSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";

export default function LandingPage() {
    return (
        <React.Fragment>
            <HeroSection />
            <FeaturesSection />
            <CreatorsSection />
            <Footer />
        </React.Fragment>
    );
}
