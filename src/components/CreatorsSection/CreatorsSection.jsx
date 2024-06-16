import React from "react";
import "./CreatorsSection.css";

const CreatorsSection = () => {
    return (
        <section className="creators">
            <h2>Around 5M+ creators</h2>
            <div className="creators-list">
                <div className="creator">
                    <img src="creator1.png" alt="Creator 1" />
                    <h3>Maria Hugh</h3>
                </div>
                <div className="creator">
                    <img src="creator2.png" alt="Creator 2" />
                    <h3>Rick Sanchez</h3>
                </div>
                <div className="creator">
                    <img src="creator3.png" alt="Creator 3" />
                    <h3>Rebecca Burucki</h3>
                </div>
                <div className="creator">
                    <img src="creator4.png" alt="Creator 4" />
                    <h3>Alexandra Sanchez</h3>
                </div>
            </div>
        </section>
    );
};

export default CreatorsSection;
